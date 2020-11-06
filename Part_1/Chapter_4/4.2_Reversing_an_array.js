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

console.log(reverseArray([1, 3, 7]));

//2. reverseArrayInPlace
