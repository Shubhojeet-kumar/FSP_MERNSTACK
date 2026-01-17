function waitCallBack(seconds, callback){
  setTimeout(()=>{
    callback("Done after "+ seconds + "seconds");
  },seconds*1000);
}

console.log("------------------------------START-----------------------------------------");

waitCallBack(4,(result)=>{
  console.log(result);
});

console.log("-------------------------------END----------------------------------------")