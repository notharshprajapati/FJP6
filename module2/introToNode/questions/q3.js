//Q. copy index.html file from module1 to a new folder inside module2 having name html.
let fs = require("fs");
let path = require("path");

let oPath = path.join(__dirname,"..","..","..","module1","devSite","index.html");
if(!fs.existsSync("html"))
{
    fs.mkdirSync("html");
}
let nPath = path.join(__dirname,"html","index.html");
console.log(oPath);
console.log(nPath);

fs.copyFileSync(oPath,nPath);

