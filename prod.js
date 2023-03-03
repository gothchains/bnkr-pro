//i will PROD you with a stick
let targets = [
    {
        "outputFile": "base.html"
    },
    {
        "outputFile": "cheatless.html",
        "disabledModules": [
            "/cheat/"
        ]
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
    console.log("doing");
    let out = exec('node build.js src dist syscall '+targets[i].name, { encoding: 'utf-8' });
    console.log(out);
}