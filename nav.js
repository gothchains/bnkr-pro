let keybindState = [];
let quirkMode = 0;
let intervals = [];
let navigationId = "";
let nonSandboxedExecutionStatus = {};
let historyStack = {
    "back": [],
    "front": [],
    "current": "index.html"
}
let queryParams = {};
function executeScriptElements(containerElement) {
    const scriptElements = containerElement.querySelectorAll("script");
    Array.from(scriptElements).forEach((scriptElement) => {
        const clonedElement = document.createElement("script");
        Array.from(scriptElement.attributes).forEach((attribute) => {
            clonedElement.setAttribute(attribute.name, attribute.value);
        });
        clonedElement.text = scriptElement.text;
        scriptElement.parentNode.replaceChild(clonedElement, scriptElement);
    });
}
async function clearNavigation(h,dnu) {
    document.body.style.opacity = 0;
    if(dnu==undefined||dnu.transition!=false) await new Promise(r => setTimeout(r, 300));
    if(dnu!=undefined&&dnu.queryParams != undefined){
        queryParams = dnu.queryParams;
    } else {
        queryParams={};
    }
    for(let i in intervals){
        clearTimeout(intervals[i]);
    }
    nonSandboxedExecutionStatus[navigationId] = "terminated";
    navigationId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    nonSandboxedExecutionStatus[navigationId] = "running";
    let tz = h;
    if (h[0] != "/") h = "/" + h;
    if (window.navigation[h] == undefined) {
        alert("Link is invalid");
        historyMode("back");
        return false;
    }
    h = window.navigation[h];
    let p = document.createElement("p");
    p.innerHTML = h[0];
    let ct = p.textContent;
    for (let i in window.contentCache) {
        ct = ct.replaceAll("((" + i + "))", window.contentCache[i]);
    }
    document.head.innerHTML = ct;
    let cmp = document.createElement("style");
    cmp.innerHTML = window.contentCache["libs/ln.css"];
    cmp.setAttribute("tracking-href", "libs/ln.css");
    cmp.setAttribute("injection-mode", "libforcer");
    document.head.appendChild(cmp);
    delete cmp;
    p.innerHTML = h[1];
    ct = p.textContent;
    for (let i in window.contentCache) {
        ct = ct.replaceAll("((" + i + "))", window.contentCache[i]);
    }
    document.getElementById("pseudobody").innerHTML = ct;
    let nav = document.createElement("style");
    nav.innerHTML = `a[onclick]{cursor:pointer;}.ext_warn:before{content: '⚠️↗ ';}`;
    document.head.appendChild(nav);
    if(dnu==undefined||dnu.history!=false){    
        historyStack.front = [];
        historyStack.back.push(historyStack.current);
        historyStack.current = tz;
    }
    executeScriptElements(document.getElementById("pseudobody"));
    delete p;
    document.title = "‍";
    document.body.style.opacity = 1;
    return true;
}
function historyMode(m){
    if(m=="back" && historyStack.back.length > 0){
        let t = historyStack.back.pop();
        historyStack.front.push(historyStack.current);
        historyStack.current = t;
        clearNavigation(t, {
            "history": false
        });
    } else if(m=="forward" && historyStack.front.length > 0){
        let t = historyStack.front.pop();
        historyStack.back.push(historyStack.current);
        historyStack.current = t;
        clearNavigation(t, {
            "history": false
        });
    }
}
document.addEventListener("keydown", (e) => {
    if (window.config.user.panic != undefined) {
        if (window.config.user.panic[keybindState.length] == e.key) {
            keybindState.push(e.key);
            if (keybindState.length == window.config.user.panic.length) {
                keybindState = [];
                eval(window.config.user.panicAction);
            }
        }
    }
});
document.addEventListener("keyup", (e) => {
    if (keybindState.indexOf(e.key) != -1) {
        keybindState = [];
    }
});
setInterval(() => {
    // check quirk mode
    if (!quirkMode && document.compatMode == "BackCompat") {
        notification.notify('Possible Error: Document in Quirks Mode', {
            duration: 2000,
        });
        quirkMode = 1;
    }
}, 5000);
let cmp = document.createElement("script");
cmp.innerHTML = window.contentCache["libs/cmd.js"];
cmp.setAttribute("tracking-src", "libs/cmd.js");
document.getElementById("permanent").appendChild(cmp);
cmp = document.createElement("script");
cmp.innerHTML = window.contentCache["libs/notif.js"];
cmp.setAttribute("tracking-src", "libs/notif.js");
document.getElementById("permanent").appendChild(cmp);
cmp = document.createElement("script");
cmp.innerHTML = window.contentCache["libs/json.js"];
cmp.setAttribute("tracking-src", "libs/json.js");
document.getElementById("permanent").appendChild(cmp);
let container = document.getElementById('ntf');
const notification = new LunaNotification(container, {
    position: {
        x: 'right',
        y: 'top',
    },
    theme: "dark"
});
container = document.getElementById('cmdho');
const commandPalette = new LunaCommandPalette(container, {
theme: "Dark",
placeholder: 'Type a command',
shortcut: 'Ctrl+Shift+P',
commands: [
    {
        title: "Go to Index",
        handler(){
            clearNavigation("index.html");
        }
    },
    {
        title: "Go to Debug Page",
        handler(){
            clearNavigation("info.html");
        }
    },
    {
        title: "Go to Games",
        handler(){
            clearNavigation("game.html");
        }
    },
    {
        title: "Backward Page",
        handler(){
            historyMode("back");
        }
    },
    {
        title: "Forward Page",
        handler(){
            historyMode("forward");
        }
    },
]
});
clearNavigation("index.html",{
    "history": false,
    "transition": false
});
