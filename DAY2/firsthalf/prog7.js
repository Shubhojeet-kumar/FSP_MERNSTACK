const fs=require('fs');

console.log("-----------------------------------------START------------------------------------------");

const value="\nappended line with async"
fs.appendFile("example.txt",value,(err)=>{
  if(err){
    console.log("error=",err);
    return;
  }
  console.log("file appended succesfully with async");
})

console.log("------------------------------------------END-------------------------------------------");