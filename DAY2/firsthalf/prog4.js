const fs=require('fs');

console.log("-----------------------------------------START------------------------------------------");

const value="i am good, \nwhat about you? \njai hind🇮🇳"
fs.writeFileSync("example2.txt",value,"utf8",);

console.log("------------------------------------------END-------------------------------------------");