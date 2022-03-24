
//read content of unorganised folder and print each file type
//for example abc.mp3 --> print Audio File
//            xyz.mp4 --> print Video File
//            fsd.jpeg -> print Image File

let fs = require("fs");
let path = require("path");

let arr = [];
let folderPath = "/home/harsh/FJP6/module2/introToNode/questions/uno";
let contentOfFolder = fs.readdirSync(folderPath);

for (let i = 0; i < contentOfFolder.length; i++) {
    let ext = path.extname(contentOfFolder[i]);
    if(ext == ".jpg")
    {
        console.log("Photo File");
    }
    else if(ext == ".mp3")
    {
        console.log("Audio File");
    }
    else if(ext == ".mp4")
    {
        console.log("Video File");
    }
    else if(ext == ".zip")
    {
        console.log("Compressed File");
    }
    else if(ext == ".xlsx")
    {
        console.log("Exel File");
    }
    else if(ext == ".doc")
    {
        console.log("Document File");
    }
    else if(ext == ".pdf")
    {
        console.log("Pedophile");
    }
    else
    {
        console.log("IDK Google it");
    }
}
