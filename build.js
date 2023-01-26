const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var UglifyJS = require("uglify-js");
const fs = require("fs");
const axios = require("axios");
const fsp = require('fs').promises;
const path = require('path');
const config = require("./config");
async function walk(dir) {
    let files = await fsp.readdir(dir);
    files = await Promise.all(files.map(async file => {
        const filePath = path.join(dir, file);
        const stats = await fsp.stat(filePath);
        if (stats.isDirectory()) return walk(filePath);
        else if(stats.isFile()) return filePath;
    }));

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}
async function build(){
	let bunker = process.argv[2];
	if(bunker == undefined){
		bunker = "bunker";
	}
	console.log(`Building from path '${bunker}' with config: 'config.js'`);
	let htmls = [];
	let files = await walk(__dirname+"/"+bunker);
	for(let i in files){
		files[i] = files[i].replace(/\\/g, "/");
		files[i] = files[i].split(__dirname.replace(/\\/g, "/")+"/"+bunker)[1];
	}
	for(let i in files){
		let lp = files[i].replace("/","").split("/")
		lp.pop();
		lp=lp.join("/");
		if(lp!=""){
			lp="/"+lp+"/";
		}
		if(files[i].split(".")[files[i].split(".").length-1] != "html"){
			continue;
		}
		let ht = fs.readFileSync(__dirname+"/"+bunker+files[i]);
		const dom = new JSDOM(ht);
		let document = dom.window.document;
		let window = dom.window;
	
		//script inlining
		let scrs = document.getElementsByTagName("script");
		for(let i=0;i<scrs.length;i++){
			let content;
			if(scrs[i].src.indexOf("http") != 0){
				let src = __dirname+"/"+bunker+"/"+lp+scrs[i].src;
				content = fs.readFileSync(src, "utf-8");
			} else {
				try{
					if(config["3rdPartyResources"].js) content = (await axios.get(scrs[i].src)).data;
				}catch(e){
					console.log("Failed to fetch remote resource: "+e);
					return false;
				}
				
			}
			if(config.minifyJS && content != undefined){
				content = UglifyJS.minify(content);
				if(content.error != undefined){
					throw content.error;
				}
				content = content.code;
			}
			scrs[i].removeAttribute("src");
			scrs[i].innerHTML = content;
		}
		delete scrs;
	
		//css inlining
		let css = document.getElementsByTagName("link");
		let toReplace = [];
		for(let i=0;i<css.length;i++){
			if(css[i].rel == "stylesheet"){
				let style = document.createElement("style");
				let content;
				if(css[i].href.indexOf("http") != 0){
					let src = __dirname+"/"+bunker+"/"+lp+css[i].href;
					content = fs.readFileSync(src, "utf-8");
				} else {
					try{
						if(config["3rdPartyResources"].css) content = (await axios.get(css[i].href)).data;
					}catch(e){
						console.log("Failed to fetch remote resource: "+e);
						return false;
					}
				}
				style.innerHTML = content;
				toReplace.push([css[i], style]);
			}
		}
		for(let i in toReplace){
			toReplace[i][0].replaceWith(toReplace[i][1]);
		}

		//navigation virtualization
		let as = document.getElementsByTagName("a");
		for(let i=0;i<as.length;i++){
			if(as[i].href.indexOf("http") != 0){
				as[i].setAttribute("onclick", `clearNavigation('${as[i].href}');`);
				as[i].removeAttribute("href");
			}
		}
		
		//config forcer

		if(config.forceTitle != ""){
			document.title = config.forceTitle;
		}
		if(config.forceFavicon.path != ""){
			let icons = document.getElementsByTagName("link");
			let cd = false;
			for(let i=0;i<icons.length;i++){
				if(icons[i].rel == "icon"){
					icons[i].href = config.forceFavicon.path;
					cd=true;
				}
			}
			if(!cd){
				let fav = document.createElement("link");
				fav.rel = "icon",
				fav.href= config.forceFavicon.path;
				document.head.appendChild(fav);
				delete fav;
			}
		}

		htmls[files[i]] = dom.serialize();
	}

	// html files compiled
	// add compiled files to load on index.html

	let navigation = {};
	for(let i in htmls){
		let html = htmls[i];
		let dom = new JSDOM(html);
		navigation[i] = [];
		navigation[i][0] =  dom.window.document.head.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		navigation[i][1] =  dom.window.document.body.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
		console.log(`NAVIGATION CACHE: ${i} (SIZE:${html.length})`);
	}
	let dom = new JSDOM(htmls["/index.html"]);

	//navigation data import
	let nav = dom.window.document.createElement("script");
	nav.innerHTML = `window.navigation = ${JSON.stringify(navigation)}`;
	dom.window.document.body.appendChild(nav);

	//navigation handler import
	nav = dom.window.document.createElement("script");
	let njs = fs.readFileSync(__dirname+"/nav.js", "utf-8");
	if(config.minifyJS){
		njs = UglifyJS.minify(njs);
		if(njs.error != undefined){
			throw njs.error;
		}
		njs=njs.code;
	}
	
	nav.innerHTML = njs;
	dom.window.document.body.appendChild(nav);

	//config import
	nav = dom.window.document.createElement("script");
	nav.innerHTML = `window.config = ${JSON.stringify(config)}`;
	dom.window.document.body.appendChild(nav);
	
	let raw = "<!DOCTYPE html>"+dom.serialize();
	console.log(`Finished building to 'index.html'. Total size: ${raw.length/1000}kb`);
	fs.writeFileSync(__dirname+"/index.html", raw);
}
build();