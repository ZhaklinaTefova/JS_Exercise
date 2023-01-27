/* EXERCISE 10
Make a TODO app for yourself. You should have only one input 
and “Add” button. After clicking on the Add button, display 
the newly added task that you need to do in an unordered list.
 Each new todo should be saved into an array.
Bonus: Add checkbox to each of the tasks in the unordered list,
 and after checking a task, it should cross trough the text! 
 Try making the ToDo an object that needs to have two properties:
 Name and isCompleted properties */

let ulList = document.querySelector("#listOfToDos");

let inputName = document.querySelector("#toDoInput");

let addBtn = document.querySelector("#add");

// empty array
let toDosList = [];

// constructor
function ToDos(name, isCompleted) {
  this.name = name;
  this.isCompleted = isCompleted;
}

// function to print elements in todo <li>
function printToDos(elementToPrintIn, array) {
  // this is the ul element
  elementToPrintIn.innerHTML = "";
  // array is the toDosList!
  for (let i = 0; i < array.length; i++) {
    let listEl = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = array[i].isCompleted;

    let label = document.createElement("label");
    label.innerText = array[i].name;
    
    checkbox.addEventListener("change", function (e) {
      e.preventDefault;
      array[i].isCompleted = !array[i].isCompleted;
      if (array[i].isCompleted) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    })

    listEl.appendChild(checkbox);
    listEl.appendChild(label);

    elementToPrintIn.appendChild(listEl);
  }
}

addBtn.addEventListener("click", function (e) {
  e.preventDefault;
  if (inputName.value === "") {
    return;
  }

  let name = inputName.value;
  let isCompleted = false;

  let newToDo = new ToDos(name, isCompleted);
  toDosList.push(newToDo);
  console.log(newToDo);

  printToDos(ulList, toDosList);

  inputName.value = "";
});