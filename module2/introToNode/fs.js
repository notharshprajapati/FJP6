let fs = require("fs");
let path = require("path");

// let filePath = path.join(__dirname, "file.txt");

// // //C-create
// //it creates file if it does not exists else it override
// fs.writeFileSync(filePath, "Hello I am a text file ");

// // //R-read
// console.log("Before update : ");
// let content = fs.readFileSync(filePath, 'utf-8');
// console.log(content);

// // //U-update
// fs.appendFileSync(filePath, "\nNewly added content");
// console.log("After update : ")
// console.log(fs.readFileSync(filePath, 'utf-8'));

// //D-delete
// fs.unlinkSync(filePath);

//check / make / delete dir
// if (!fs.existsSync("temp")) {
//     fs.mkdirSync("temp")
// }
// else {
//     fs.rmdirSync("temp")
// }

// read dir
// let folderPath = "/media/harsh/Code/NADOS/FJP6/module2";
// let contentOfFolder = fs.readdirSync(folderPath);
// console.log(contentOfFolder);

// //Copy
// let copyContent = fs.readFileSync(filePath, 'utf-8');
// let copyfilePath = path.join(__dirname, "copy.txt");
// fs.writeFileSync(copyfilePath, copyContent);

//copy file into new dir
let sourcePath = path.join(__dirname,"file.txt");
let destinationPath = path.join(__dirname,"module","file.txt");
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath);