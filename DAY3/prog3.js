//PARALLEL EXECUTION

import { resolve } from "path";

function waiting(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}

async function runParllel(){
  console.log('--------------------START------------');

  await Promise.all([
    waiting(5000).then(()=> console.log('Task 1 done')),
    waiting(5000).then(()=> console.log('Task 2 done')),
    waiting(5000).then(()=> console.log('Task 3 done'))
  ]);
  console.log("all task done");
}

runParllel();