/* EXERCISE 3
Write a JavaScript program to get the difference 
between a given number and 13, if the number is 
greater than 13 double the difference as a result.

Make sure you use a function!

Ex. Input: 20 ==> Output: 14 */
input = parseInt(prompt("Insert your choice of number!!!"));
function findTheDifference(input) {
  if (input > 13) {
    let difference = input - 13;
    result = difference * difference;
    console.log(`The result is: ${result}`);
    return;
  } else {
    console.log("Your number is less then 13!");
    // alert("Your number is less then 13!");
  }
}
findTheDifference(input);
