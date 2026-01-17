const fs=require('fs');

console.log("-----------------------------------------START------------------------------------------");

const value="i am good, \nwhat about you? \nRAM RAM"
fs.writeFile("example2.txt",value,(err)=>{
  if(err){
    throw err;
    return;
  }
  console.log("File written (async)");
});

console.log("------------------------------------------END-------------------------------------------");