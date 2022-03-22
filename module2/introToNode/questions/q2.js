//Q. given an array arr=[audio,video,image,software,documents,applications,other]
//   make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path");

let fName = ["audio", "video", "image", "software", "documents", "applications", "other"];
let fType = [".mp3", ".mp4", ".png", ".exe", ".docx", ".app", ".other"];


if (!fs.existsSync("folder")) {
    fs.mkdirSync("folder");
}
for (let i = 0; i < fName.length; i++) {
    if (!fs.existsSync(`./folder/${fName[i]}`), { recursive: true }) {
        fs.mkdirSync(`./folder/${fName[i]}`);
    }
    for (let j = 1; j <= 4; j++) {
        let pPath = path.join(__dirname, "folder", `${fName[i]}`, `${fName[i]}${j}${fType[i]}`);
        fs.writeFileSync(pPath, `${fName[i]} File`);
    }
}