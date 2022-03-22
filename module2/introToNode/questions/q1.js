//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path");

// if(!fs.existsSync("folder"))
// {
//     fs.mkdirSync("folder");
// }

let newDir = path.join(__dirname,"folder","text.txt");
console.log(newDir)
fs.writeFileSync(newDir,"lorem ipsum");