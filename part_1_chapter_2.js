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

