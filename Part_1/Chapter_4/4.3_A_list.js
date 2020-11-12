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
const listArray = (list) =>{
  let array = [];
  for (let i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
};
console.log(listArray(list)); //[1, 2, 3]

