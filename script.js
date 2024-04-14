//alert ("Cool chicks rise up!")

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.” 

// Fizz Buzz

for (let i = 0; i < 101; i++) {
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

console.log("___________")



//Prime Time

let n = 31;
let nextNum = 47

for (let i = n; i <= nextNum; i++) {
  let flag = 0; 

for (let j = 2; j < i; j++) {
  if (i % j === 0) {
    flag =1;
      break;
  }
}
if (flag === 0) {
  console.log(`${i} is prime!`);
}


}

console.log(`${i} is prime!`)
