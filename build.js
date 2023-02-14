const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var UglifyJS = require("uglify-js");
var md5 = require('md5');
const version = "0.0-development";
const fs = require("fs");
const axios = require("axios");
var minify = require('html-minifier').minify;
const fsp = require('fs').promises;
const path = require('path');
const config = require("./config");
let buildId = parseInt(fs.readFileSync(__dirname+"/builds.txt", "utf-8"));
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
	let dist = process.argv[3];
	if(bunker == undefined){
		bunker = "src";
	}
	if(dist == undefined){
		dist = "dist"
	}
	console.log(`Building from path '${bunker}' with config: 'config.js' to output '${dist}'`);
	let htmls = [];
	let contentCache = {};
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
			if(scrs[i].src == "") continue;
			if(scrs[i].getAttribute("buildignore") == "true") continue;
			if(contentCache[scrs[i].src] == undefined){
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
				console.log(`contentCache: ${scrs[i].src} (${content.length}b)`);
				contentCache[scrs[i].src] = content;
			}
			scrs[i].setAttribute("tracking-src", scrs[i].src);
			scrs[i].innerHTML = `((${scrs[i].src}))`;
			scrs[i].removeAttribute("src");
		}
		delete scrs;
	
		//css inlining
		let css = document.getElementsByTagName("link");
		let toReplace = [];
		for(let i=0;i<css.length;i++){
			if(css[i].rel == "stylesheet"){
				let style = document.createElement("style");
				if(contentCache[css[i].href] == undefined){
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
					console.log(`contentCache: ${css[i].href} (${content.length}b)`);
					contentCache[css[i].href] = content;
				}
				style.setAttribute("tracking-href", css[i].href);
				style.innerHTML = `((${css[i].href}))`;
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
				as[i].setAttribute("onclick", `document.body.style.opacity = 0;setTimeout(()=>{clearNavigation('${as[i].href}');document.body.style.opacity = 1;}, 300);`);
				as[i].removeAttribute("href");
				//as[i].setAttribute("href", "#");
			} else {
				as[i].classList.add("ext_warn");
			}
		}
		
		if(files[i] == "/index.html"){
			document.getElementById("v").textContent = "Bunker PRO version-"+version+" "+buildId+"-"+md5(buildId)+" on "+new Date().toLocaleString();
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

	// force manual lib entry even if dynamic asset loader doesn't

	let libs = [
		"libs/cmd.js",
		"libs/notif.js",
		"libs/ln.css"
	];

	for(let i in libs){
		let c = fs.readFileSync(__dirname+"/"+bunker+"/"+libs[i], "utf-8");
		console.log(`contentCache: ${libs[i]} (${c.length}b)`);
		contentCache[libs[i]] = c;
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
		console.log(`navigation: ${i} (${html.length}b)`);
	}
	let dom = new JSDOM(htmls["/loader.html"]);
	
	//versioning inject
	let vcfg = {
		"version": version,
		"buildId": buildId,
		"checksum": md5(buildId),
		"buildDate": new Date().toLocaleString()
	}

	//navigation data import
	let nav = dom.window.document.createElement("script");
	nav.innerHTML = `window.navigation = ${JSON.stringify(navigation)}`;
	dom.window.document.body.appendChild(nav);

	nav = dom.window.document.createElement("script");
	nav.innerHTML = `window.contentCache = ${JSON.stringify(contentCache)}`;
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


	nav = dom.window.document.createElement("style");
	nav.innerHTML = `a[onclick]{cursor:pointer;}`;
	dom.window.document.head.appendChild(nav);

	//config import
	nav = dom.window.document.createElement("script");
	nav.innerHTML = `window.config = ${JSON.stringify(Object.assign(config, vcfg))}`;
	dom.window.document.body.appendChild(nav);
	let raw = dom.serialize();
	raw = minify(raw, {
		minifyCSS: config.minifyCSS,
		collapseWhitespace: config.htmlOptions.collapseWhitespace,
		removeComments: config.htmlOptions.removeComments,
		sortClassName: config.htmlOptions.sortClassName,
		useShortDoctype: config.htmlOptions.useShortDoctype
	});
	fs.writeFileSync(__dirname+"/"+dist+"/index.html", raw);
	fs.writeFileSync(__dirname+"/builds.txt", (buildId+1)+"");
	console.log(`Finished building to '${dist}/index.html'. Total size: ${raw.length/1000}kb`);
}
build();