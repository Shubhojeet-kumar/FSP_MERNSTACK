const person={
  name:"Shubho",
  age:21,
  address:"Dhanbad",
  college:"IIT Asansol"
};

console.log(person);
console.log(person.college);
console.log("------------------------------------------------------------------");

for(let key in person){
  console.log(`${key} : ${person[key]}`);
}

console.log("------------------------------------------------------------------");

let key=Object.keys(person);
for(let i=0;i<key.length;i++){
  console.log(key[i]+"="+person[key[i]]);
}