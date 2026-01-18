const fs=require('fs').promises;

async function readFileExample(){
  try{
    const data=await fs.readFile('example.txt','utf8');
    console.log('File content:', data);
  }catch(err){
    console.error('There is some problem with your file:');
  }finally{
    console.log('always executed ');
  }
}
readFileExample();