/* EXERCISE 7
Make an array of ten elements. Make sure four of them to be: 
Null, undefined, NaN, “” and false (JavaScript falsy values). 
Create a function that will work for every array in the world :)
 and it will remove all the falsy values from the array.*/

let myArray = [2, 3, "New", "Hi", "four", "", false, undefined, NaN, null];
function myFunction(removedFalsyValues) {
  removedFalsyValues = [];
  for (let i = 0; i < myArray.length; i++) {
    if (
      myArray[i] !== null &&
      myArray[i] !== "" &&
      myArray[i] !== false &&
      myArray[i] !== undefined &&
      !Number.isNaN(myArray[i])
    ) {
      removedFalsyValues.push(myArray[i]);
    }
  }
  console.log(removedFalsyValues);
}
myFunction();

// !!variable = it will check if the value is truty or falsy
