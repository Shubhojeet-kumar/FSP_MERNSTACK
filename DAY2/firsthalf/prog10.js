function foo(){
  return function(){
    console.log("hi fron func func");
  }
}
//foo     no output
//foo()   no output
foo()();

//VARIABLE ARE MUTABLE
let b=[1,2,3];
//b.push(4);      mutate b
let c=[...b,4]    //doesnt mutate b and ...is spread operator
console.log(c);

//FUNCTIONS HAVE NO SIDE EFFECT
//function ke bahar manipulate nhi kar skte hai