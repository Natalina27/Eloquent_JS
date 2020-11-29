console.log('======4.3 ========');
/*
Write a function arrayToList that builds up a list structure
like the one shown when given [1, 2, 3] as argument.
```
  let list = {
    value: 1.
    rest : {
      value: 2,
      rest : {
        value : 3,
        rest: null
      }
    }
  };
```
  Also write a listArray function that produces an array from a list.
  Then add a helper function prepend, which takes an element and a list
and creates a new list that add the element to the front on the input list.
and nth that takes a list and a number and returns the element at the given position
in the list or undefined when there is no such element.
If you haven't already , also write a recursive version  of nth.
 */

const array = [1, 2, 3];

//1. arrayToList
const arrayToList = (arr) => {
  let list = null;
  for(let i = arr.length - 1; i >= 0; i--){
   list ={value: arr[i], rest: list}
  }

  return list;
}
const list = arrayToList(array);
console.log(list);
/*
list

{
value: 1.
rest : {
  value: 2,
      rest : {
    value : 3,
        rest: null
  }
}
};
 */

//2.listArray
const listToArray = (list) =>{
  let array = [];
  for (let i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
};
console.log(listToArray(list)); //[1, 2, 3]

//3. prepend -takes an element and a list
// and creates a new list that add the element to the front on the input list.
const  prepend = (value, list) =>  {
  return {
    value,
    rest: list
  };
}
console.log(prepend(10, prepend(20, null)));
/*
{value: 10, rest: {value: 20, rest: null}}
 */

//4. nth
const nth = (list, n) => {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log('arrayToList([10, 20])', arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log('listToArray(arrayToList([10, 20, 30]))', listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log('prepend(10, prepend(20, null))', prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log('nth(arrayToList([10, 20, 30]), 1)', nth(arrayToList([10, 20, 30]), 1));
// → 20
