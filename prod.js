//i will PROD you with a stick
let targets = [
    {
        "outputFile": "base.html"
    },
    {
        "outputFile": "base.htm",
    },
    {
        "outputFile": "cheatless.html",
        "disabledModules": [
            "/cheat/"
        ],
        "buildModifier": "cheatless"
    },
    {
        "outputFile": "cheatless.htm",
        "disabledModules": [
            "/cheat/"
        ],
        "buildModifier": "cheatless"
    },
    {
        "outputFile": "gameless.html",
        "disabledModules": [
            "/game.html"
        ],
        "buildModifier": "gameless"
    },
    {
        "outputFile": "gameless.htm",
        "disabledModules": [
            "/game.html"
        ],
        "buildModifier": "gameless"
    }
];
const fs = require("fs");
const exec = require('child_process').execSync;
let bc = require("./config");
for(let i in targets){
    let tc = targets[i];
    let tbc = bc;
    for(let i in tc){
        tbc[i]=tc[i];
    }
    fs.writeFileSync(__dirname+"/tmpconf.js", `module.exports = ${JSON.stringify(tbc)}`);
    console.log("doing "+tbc.buildModifier);
    let out = exec('node build.js src dist syscall '+targets[i].name, { encoding: 'utf-8' });
    if(process.argv[2] == "v"){
        console.log(out);
    } else {
        console.log(out.split("\n")[out.split("\n").length-2]);
    }
}