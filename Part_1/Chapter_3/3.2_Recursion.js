console.log('======3.2 Recursion ========');


//Recursion
// Recursive function isEven accepts 1 parameter - positive whole number - and return Boolean
//0 - even
//1 - odd
// n-2
//test - 50, 75, -1

const isEven = (number) => {
  if( number === 0 ) return true;
  if( number === 1 ) return false;
  if (number < 0){
    return isEven(number + 2)
  } else{
    return isEven(number - 2);
  }
}

console.log(isEven(-50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1)); //false
console.log(isEven(0)); //true

