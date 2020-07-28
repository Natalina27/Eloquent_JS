//Part1
//1. Values, types and operators
//2. Program structure

//Looping a Triangle
// Write a loop that makes seven calls to output triangle
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
//Chessboard
// String that rappresents 8x8 grid using \n
const chessboard = (size) => {

    let board = "";

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if ((x + y) % 2 === 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);
}
chessboard(8);

