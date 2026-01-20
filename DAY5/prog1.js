const numbers=[1,2,3,4,5];
const new_numbers=[numbers,6,7,8,9]
console.log(new_numbers);
const new_new_numbers=[...numbers,6,7,8,9]
console.log(new_new_numbers);

const user={
  name:"shubho",
  age:21
};

const update_user={
  ...user,
  age:22
}

console.log(user);
console.log(update_user);