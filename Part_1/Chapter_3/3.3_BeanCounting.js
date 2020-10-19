console.log('======3.3 Bean Counting ========');

//Bean counting
// 1.Function countBs takes a string and returns a number of uppercase B
// 2. Function countChar that behaves like countBs but it takes 2 arguments strind and character to count
// 3. Rewrite countBs to make use of this new function

function replaceToUpper(str){
  return str.replace(/[a-z]/g, '');
}

console.log(replaceToUpper('MaEfSdsfSsdfsAdfssdGsdfEsdf')); //MESSAGE

function countUpper(str){
  return str.replace(/[a-z]/g, '').length;
}

console.log(countUpper('MaEfSdsfSsdfsAdfssdGsdfEsdf')); //7

//1
function countBs(str){
  return str.split('').filter(item => item ==='B').length;
}

console.log(countBs('BBC')); //2

//2
function countChar(str, char){
  return str.split('').filter(item => item === char).length;
}

console.log(countChar('kakkerlak', 'k')); //4

//3
function countBs1(str){
  return countChar(str, 'C');
}

console.log(countBs1('BBC')); //1
console.log(countBs1('kakkerlak')); //0


