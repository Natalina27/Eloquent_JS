//Looping a Triangle
const loopingTriangle = () => {
    let res = '';
    for (let i = 0; i < 7; i++) {

        res += '#';
        console.log(res);

    }
}

loopingTriangle();

console.log('========================');

//FizzBuzz

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

//Chessboard



