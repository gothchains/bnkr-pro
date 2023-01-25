function replaceLast(find, replace, string) {
    var lastIndex = string.lastIndexOf(find);
    
    if (lastIndex === -1) {
        return string;
    }
    
    var beginString = string.substring(0, lastIndex);
    var endString = string.substring(lastIndex + find.length);
    
    return beginString + replace + endString;
}
function nodeScriptReplace(node) {
    if ( nodeScriptIs(node) === true ) {
            node.parentNode.replaceChild( nodeScriptClone(node) , node );
    }
    else {
            var i = -1, children = node.childNodes;
            while ( ++i < children.length ) {
                  nodeScriptReplace( children[i] );
            }
    }

    return node;
}
function nodeScriptClone(node){
    var script  = document.createElement("script");
    script.text = node.innerHTML;

    var i = -1, attrs = node.attributes, attr;
    while ( ++i < attrs.length ) {                                    
          script.setAttribute( (attr = attrs[i]).name, attr.value );
    }
    return script;
}

function nodeScriptIs(node) {
    return node.tagName === 'SCRIPT';
}
function clearNavigation(h){
    if(h[0]!="/")h="/"+h;
    if(window.navigation[h] == undefined){
        alert("Link is invalid");
        return false;
    }
    h = window.navigation[h]
    let p = document.createElement("p");
    p.innerHTML = h[0];
    document.head.innerHTML = p.textContent;
    p.innerHTML = h[1];
    document.body.innerHTML= p.textContent;
    nodeScriptReplace(document.body);
    delete p;
    return true;
}