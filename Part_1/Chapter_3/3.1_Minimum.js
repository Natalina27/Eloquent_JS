console.log('======3.1 Minimum========');

//Minimum
// Function takes 2 arguments and return min
const minimun = (arg1, arg2) =>{
  if(arg1 === arg2) {return 'the args are the same'}
  let min = arg1;
  min = arg1 < arg2 ? arg1 : arg2;
  return min;
}

console.log(minimun(2,3)); //2
console.log(minimun(8,5)); //5
console.log(minimun(4,4)); //2
