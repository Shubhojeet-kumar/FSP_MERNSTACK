const fs=require("fs");

console.log("-----------------------------------------START------------------------------------------");

const data=fs.readFileSync("example.txt",'utf8');
console.log(data);

console.log("------------------------------------------END-------------------------------------------");