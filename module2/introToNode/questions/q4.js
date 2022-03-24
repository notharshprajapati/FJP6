// read content of unorganised folder and make  an array which has extension name of each file
let fs = require("fs");
let path = require("path");

let arr = [];

let folderPath = "/home/harsh/FJP6/module2/introToNode/questions/uno";
let contentOfFolder = fs.readdirSync(folderPath);
for (let i = 0; i < 7; i++) {
    arr[i] = path.extname(contentOfFolder[i]);
}
console.log(arr);

