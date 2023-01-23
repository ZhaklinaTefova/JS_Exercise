/* EXERCISE 8
Write a JavaScript function called storyTeller(), 
that will take as an input parameters the input 
fields values from the html!


ex: storyTeller(who, what, when);

In the function, retrieve the current values of 
the form input elements, make a story from them,
and output that in the story div (like "Example:
Lancelot was a really strong knight in the middle age!")*/

// 1. Create inputs for first name, last name, year of birth, and current age.
// 2. Select them in the DOM
// 3. Declare function that will take as paramethars inputs from HTML
// 4. Return a message story
// 5. Add Event to the button on click it will print the message to the page (create ul to print in li element)
// 6. Prevent default
// 7. Call the function with the input values from HTML inputs
// 8. Clear the inputs in the HTML with a function
// 9. Call the function on each click on button

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let birthYear = document.getElementById("birthYear");
let age = document.getElementById("age");
let btn = document.querySelector("button");
let list = document.querySelector("#listStory");

function tellStory(firstName, lastName, birthYear, age) {
  return `This is a story for ${firstName} ${lastName}. ${firstName} was born in ${birthYear}. Today ${firstName} is ${age} years old.`;
}

btn.addEventListener("click", function (e) {
  e.preventDefault;

  let li = document.createElement("li");
  list.append(li);
  li.innerText = tellStory(
    firstName.value,
    lastName.value,
    birthYear.value,
    age.value
  );

  clearInputs();
});

function clearInputs() {
  firstName.value = "";
  lastName.value = "";
  birthYear.value = "";
  age.value = "";
}
