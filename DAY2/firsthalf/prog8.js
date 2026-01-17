//CALLBACK FUNCTION

function greet(name,id){
  console.log(`hello, ${name}`);
  id();
}

function roll(){
  console.log(10800123987);
}

function rollno(){
  console.log(987)
}

greet("anuj",roll);
greet("madhav",rollno);
//greet("tushal",6);        error because it should be function

