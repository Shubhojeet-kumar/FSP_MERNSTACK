//SEQUENTIAL EXECUTION

function waiting(ms){
  return new Promise(resolve=> setTimeout(resolve,ms));
}

async function run() {
  console.log("-----------------START----------");

  await waiting(3000);
  console.log('After 3 sec');

  await waiting(5000);
  console.log('After 5 sec');
}

run();