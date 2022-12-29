/* EXERCISE 5
Bob's salary is 1000 eur per month. He has expenses that has to cover 
during the month. He has to pay rent for his apartment 375 eur. 
He should pay 250 eur for his bills in total. Print on screen 
what is the amount left that Bob has for the rest of the month, 
and what is the total amount of his expenses. */

let salary = 1000;
console.log("Bob's salary is 1000 eur per month.");
let rent = 375;
console.log("Bob's rent for his apartment is 375 eur per month.");
let bills = 250;
console.log("Bob's bills is 250 eur per month.");
let expenses = rent + bills;
let leftAmount = salary - expenses;

console.log(`Bob has amount left from this month ${leftAmount}eur,
and his total expenses are ${expenses}eur`);
alert(`Bob has amount left from this month ${leftAmount}eur,
and his total expenses are ${expenses}eur`);
