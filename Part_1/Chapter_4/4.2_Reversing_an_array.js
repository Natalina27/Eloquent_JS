console.log('======4.2 ========');
// Write 2 functions reverseArray and reverseArrayInPlace.
//The first reverseArray takes an array as argument and produces a new array
// that has the same elements in the inverse order.
//The second modifies an array given as argument by reversing its elements

//1.reverseArray
const reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log(reverseArray([1, 3, 7])); //[7, 3, 1]

//2. reverseArrayInPlace
function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let old = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = old;
  }
  return arr;
}
console.log(reverseArrayInPlace([1, 3, 7])); //[7, 3, 1]

