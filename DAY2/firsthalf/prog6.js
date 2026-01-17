const fs=require('fs');

console.log("-----------------------------------------START------------------------------------------");

const value="this is appended text"
fs.appendFileSync("example.txt",value,"utf8",);

console.log("------------------------------------------END-------------------------------------------");