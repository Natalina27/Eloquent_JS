console.log('====== 2.1 Looping a Triangle========');

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
