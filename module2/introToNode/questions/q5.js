//move a file
let fs = require("fs");
let path = require("path");

let npath = path.join(__dirname,"lol.txt");
let opath = path.join(__dirname,"..","lol.txt");

// console.log(npath);
// console.log(opath);

let copyContent = fs.readFileSync(opath, 'utf-8');
fs.writeFileSync(npath,copyContent);

fs.unlinkSync(opath);