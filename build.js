const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");
const axios = require("axios");
const fsp = require('fs').promises;
const path = require('path');
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
	let htmls = [];
	let files = await walk(__dirname+"/"+bunker);
	for(let i in files){
		files[i] = files[i].replace(/\\/g, "/");
		files[i] = files[i].split(__dirname.replace(/\\/g, "/")+"/"+bunker)[1];
	}
	for(let i in files){
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
				let src = __dirname+"/"+bunker+"/"+scrs[i].src;
				content = fs.readFileSync(src, "utf-8");
			} else {
				content = (await axios.get(scrs[i].src)).data;
			}
			scrs[i].removeAttribute("src");
			scrs[i].innerHTML = content;
		}
		delete scrs;
	
		let css = document.getElementsByTagName("link");
		console.log("css length ", css.length);
		let toReplace = [];
		for(let i=0;i<css.length;i++){
			console.log("bingle");
			if(css[i].rel == "stylesheet"){
				let style = document.createElement("style");
				if(css[i].href.indexOf("http") != 0){
					let src = __dirname+"/"+bunker+"/"+css[i].href;
					content = fs.readFileSync(src, "utf-8");
				} else {
					content = (await axios.get(css[i].href)).data;
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
	let nav = dom.window.document.createElement("script");
	nav.innerHTML = `window.navigation = ${JSON.stringify(navigation)}`;
	dom.window.document.body.appendChild(nav);
	nav = dom.window.document.createElement("script");
	nav.innerHTML = fs.readFileSync(__dirname+"/nav.js", "utf-8");
	dom.window.document.body.appendChild(nav);
	fs.writeFileSync(__dirname+"/index.html", dom.serialize());
}
build();