// // Array
// const numbers = "watermelon"

// for (let vb of numbers ){
//   console.log(vb);
// }

const user = {
  Name : "Vicky_Boy_23😉",
  Age : 20,
  Skill : "Iron Man"
}

for (let key in user){
  console.log(key , user[key]);
}

for(let i = 1 ; i <= 9 ; i++ ){
  if(i === "6") continue;
  console.log(i);
}