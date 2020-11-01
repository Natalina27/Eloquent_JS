console.log('======4.1 ========');
//1. Write a range function that takes three arguments,
// start , end and step, and return an array containing
// all the numbers from start up to end (including)

//2. Write a sum function that takes an array of numbers and return the sum of these numbers

const range = (start, end, step) => {
  const arr = [];
  for(let i = start; i <= end; i += step){
    arr.push(i);
  }
  return arr;
}

console.log(range(0,10, 1));
console.log(range(0,10, 5));
