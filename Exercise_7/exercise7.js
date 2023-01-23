/* EXERCISE 7
Make an array of ten elements. Make sure four of them to be: 
Null, undefined, NaN, “” and false (JavaScript falsy values). 
Create a function that will work for every array in the world :)
 and it will remove all the falsy values from the array.*/

function myFunction1(array) {
  let removedFalsyValues = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] !== null &&
      array[i] !== "" &&
      array[i] !== false &&
      array[i] !== undefined &&
      !Number.isNaN(array[i])
    ) {
      removedFalsyValues.push(array[i]);
    }
  }
  return removedFalsyValues;
}
let myArray = [2, 3, "New", "Hi", "four", "", false, undefined, NaN, null];
console.log(myFunction1(myArray));

// !!variable = it will check if the value is truty or falsy


function myFunction2(array) {
  let removedFalsyValues = [];
  for (let i = 0; i < array.length; i++) {
    if (!!array[i]) {
      removedFalsyValues.push(array[i]);
    }
  }
  return removedFalsyValues;
}
console.log(myFunction2(myArray));



function myFunction3(array) {
  let removedFalsyValues = [];
  for (let i = 0; i < array.length; i++) {
   removedFalsyValues = array.filter(Boolean) 
  }
  return removedFalsyValues;
}
console.log(myFunction3(myArray));

