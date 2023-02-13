let keybindState = [];
let quirkMode = 0;
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
function clearNavigation(h){
    if(h[0]!="/")h="/"+h;
    if(window.navigation[h] == undefined){
        alert("Link is invalid");
        return false;
    }
    h = window.navigation[h];
    let p = document.createElement("p");
    p.innerHTML = h[0];
    document.head.innerHTML = p.textContent;
    let cmp = document.createElement("style");
    cmp.innerHTML = window.navigation["/libs/ln.css"];
    cmp.setAttribute("tracking-href", "navinjected-lib#lib/ln.css");
    document.head.appendChild(cmp);
    delete cmp;
    p.innerHTML = h[1];
    document.getElementById("pseudobody").innerHTML= p.textContent;
    let nav = document.createElement("style");
	nav.innerHTML = `a[onclick]{cursor:pointer;}`;
	document.head.appendChild(nav);
    executeScriptElements(document.getElementById("pseudobody"));
    delete p;
    return true;
}
document.addEventListener("keydown", (e)=>{
    if(window.config.defaultPanic != undefined){
        if(window.config.defaultPanic[keybindState.length] == e.key){
            keybindState.push(e.key);
            if(keybindState.length == window.config.defaultPanic.length){
                keybindState=[];
                eval(window.config.defaultPanicAction);
            }
        }
    }
});
document.addEventListener("keyup", (e)=>{
    if(keybindState.indexOf(e.key) != -1){
        keybindState=[];
    }
});
setInterval(()=>{
    // check quirk mode
    if(!quirkMode && document.compatMode == "BackCompat"){
        const container = document.getElementById('ntf');
        const notification = new LunaNotification(container, {
            position: {
                x: 'right',
                y: 'top',
            },
            theme: "dark"
        });
        notification.notify('Possible Error: Document in Quirks Mode', {
            duration: 2000,
        });
        quirkMode=1;
    }
}, 5000);