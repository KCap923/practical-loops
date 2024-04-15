//alert ("Cool chicks rise up!")

// Fizz Buzz

for (let i = 0; i < 15; i++) {
if (i % 3 === 0) {
  console.log(i + " - Fizz"); 
}
else if (i % 5 === 0) {
  console.log(i + " - Buzz")
}
else if (i % 3 === 0 && i % 5 === 0 ) {
  console.log(i + " - Fizz- Buzz!!!")
}
}
// Gave results for 0 -  15 only for a shorter log, but did test 0 - 100
//-------> 
//  0 - Fizz
//  3 - Fizz
//  5 - Buzz
//  6 - Fizz
//  9 - Fizz
//  10 - Buzz
//  12 - Fizz


console.log("___________")

//Prime Time

let n = 701;
let nextNum = 730;

for (let i = n; i <= nextNum; i++) {
  let flag = 0; 

for (let p = 2; p < i; p++) {
  if (i % p === 0) {
    flag =1;
      break;
  }
}
if (flag === 0) {
  console.log(`${i} is prime!`);
}
}

// The class work example was helpful!
//-------> 
//  701 is prime!
//  709 is prime!
//  719 is prime!
//  727 is prime!

console.log("___________")

// Feeling Loopy

// ID,Name,Occupation,Age\n
// 42,Bruce,Knight,41\n
// 57,Bob,Fry Cook,19\n
// 63,Blaine,Quiz Master,58\n
// 98,Bill,Doctor’s Assistant,26

const titles = ["ID", "Name", "Occupation", "Age"]; 
const numId = [ "42", "57", "63", "98"];
const person = ["Bruce", "Bob", "Blaine", "Bill"];
const job = ["Knight", " Fry Cook", "Quiz Master", "Doctor's Assistant"];
const age = ["41", "19", "58", "26"];

const t = [titles];
const m = [numId];
const x = [person];
const j = [job];
const a = [age];

for (let i = 0; i < titles.length; i++){
  console.log (titles [i]) ;
}


// console.log(titles)
// console.log(numId)

