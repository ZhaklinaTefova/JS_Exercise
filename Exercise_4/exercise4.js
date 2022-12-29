/* EXERCISE 4
Write a JavaScript program that will find out which of two 
inserted integers is closer to 100. Make sure to alert the 
user if a negative number is inserted!

Make sure you use a function!

Ex. Input1: 20
Input2: 80
Output: 80 is closer to 100
 */

function findTheClosestNumberTo100(input1, input2) {
  input1 = parseInt(prompt("Insert the first number!"));
  input2 = parseInt(prompt("Insert the second number!"));
  if (input1 <= 0 || input1 >= 100 || input2 <= 0 || input2 >= 100) {
    alert("One of your numbers is invalid!");
  } else {
    let result1 = 100 - input1;
    let result2 = 100 - input2;
    if (result1 > result2) {
      alert("Second number is closer to 100");
    } else {
      alert("First numer is closer to 100");
    }
  }
}
findTheClosestNumberTo100();
