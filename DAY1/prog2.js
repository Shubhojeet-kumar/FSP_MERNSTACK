var x=100;
var z;

function greetings(){
  x=20;
  let y=50;
  console.log("Hello duniya!");
  console.log("inside value of x=",x);
  console.log("inside value of y=",y);
}

console.log("outside value of x=",x);
//console.log("outside value of y=",y);           ReferenceError: y is not defined
console.log("value of z=",z);                   //value of z= undefined

greetings();

