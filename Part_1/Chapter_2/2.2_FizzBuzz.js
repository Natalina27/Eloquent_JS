console.log('======== 2.2 FizzBuzz==========');


//FizzBuzz
// Fizz - for number divisible by 3
// Buzz - for number divisible by 5
//FizzBuzz - for number divisible by 3 and 5
const FizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }
}


FizzBuzz();


console.log('========================');
