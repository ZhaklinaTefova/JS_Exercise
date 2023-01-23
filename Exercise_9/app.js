/* EXERCISE 9
Write a JavaScript programm called PhoneBook. You should have three input
 fields in the html, one for firstName, lastName and phoneNumber. After
  entering the values into each of them, on clicking on a “Save” button,
   you should display the newly added contact in a table below the inputs.
    Make sure the user is entering an appropriate values in the fields!


Bonus: Add column with delete and edit button so that you can edit or delete 
a contact! Try to save the newly added contact as an object 
(literal or construcotr function its up to you) and add it to an array! */

// selected elements from HTML
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let phoneNum = document.getElementById("number");

// save button
let saveBtn = document.getElementById("save");

// select tbody from table
let tableBody = document.querySelector("tbody");

// declare variable for id that we assign value in print function
let idToEdit = null;

// declare id
let id = 0;
// function to generate id
function createId() {
  id += 1;
  return id;
}

// contact constructor
function PhoneBookContact(id, firstName, lastName, phoneNum) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNum = phoneNum;
}

// empty array for the PhoneBook constructor (push new contacts here)
let phoneContacts = [];

// event on button save
saveBtn.addEventListener("click", function (e) {
  e.preventDefault;

  // declare boolean variable to false (it will check if an object is updateing form editing)
  let DoWeEditContact = false;

  // iterate trough the array of objects
  for (let contact of phoneContacts) {
    /* if id of the element that we try to save is matching with the assign id of the element we
       clicked to edit (from the edit function) */
    if (contact.id === idToEdit) {
      // than update the values of inputs
      contact.firstName = firstName.value;
      contact.lastName = lastName.value;
      contact.phoneNum = phoneNum.value;

      /* check if it true (contact.id === idToEdit) than it will update the values of an old object
      but only if all input fields are fulfilled
       */
      if ((DoWeEditContact = true)) {
        if (
          firstName.value === "" ||
          lastName.value === "" ||
          phoneNum.value === ""
        ) {
          alert("please fill all contact info!");
          // prevent refreshing the page after click OK on alert so the values in input fields are not lost
          e.preventDefault;
          return false;
        }
      }
    }
  }

  // if it false create a new object with the constructor
  if (DoWeEditContact === false) {
    // check if the input fields are fulfilled and if not return alert msg
    if (
      firstName.value === "" ||
      lastName.value === "" ||
      phoneNum.value === ""
    ) {
      alert("Provide Contact Information");
      // prevent refreshing the page after click OK on alert so the values in input fields are not lost
      e.preventDefault;
      return false;
    } else {
      // create new contact with constructor
      let newContact = new PhoneBookContact(
        createId(),
        firstName.value,
        lastName.value,
        phoneNum.value
      );
      // push to the array
      phoneContacts.push(newContact);
    }
  }

  // call the function to print new tr in tbody
  // emptySave(phoneContacts);

  printInTable(tableBody, phoneContacts);
  clearOnSave();

  idToEdit = null;
});

// function to print property in cell
function printInTable(printElementIn, contactsArray) {
  printElementIn.innerHTML = "";
  // set values for cells from html inputs
  for (let i = 0; i < contactsArray.length; i++) {
    printElementIn.innerHTML += `
     <tr> 
     <td>${contactsArray[i].firstName}</td> 
     <td>${contactsArray[i].lastName}</td>
     <td>${contactsArray[i].phoneNum}</td> 
     <td><button value="${contactsArray[i].id}" onclick="editContactNumber(this,phoneContacts)">Edit</button> </td>
     <td> <button value="${contactsArray[i].id}" onclick="deleteContact(this,phoneContacts)">Delete</button>  </td>
     </tr>`;
    //button value="${contactsArray[i].id}" --> on click we get the value of id from the clicked element
  }
}

// function for editing contact
function editContactNumber(element, array) {
  let contactToBeEdited = {};

  for (let i = 0; i < array.length; i++) {
    // check if element id from the array elements (of phone array) is metching with clicked objects elements
    if (array[i].id === Number(element.value)) {
      // if it is equal than replace the new updated object to the array
      contactToBeEdited = array[i];
    }
  }

  // update the values in the contact object
  firstName.value = contactToBeEdited.firstName;
  lastName.value = contactToBeEdited.lastName;
  phoneNum.value = contactToBeEdited.phoneNum;
  idToEdit = contactToBeEdited.id;
}

// function to delete object from the contact array
function deleteContact(element, array) {
  // declare new array
  let allContacts = [];
  /* iterate trough the phoneBook array and if the id from an object is not matching with
   the clicked id object (button value="${contactsArray[i].id}") than push to the new array */
  for (let i = 0; i < array.length; i++) {
    if (array[i].id !== Number(element.value)) {
      allContacts.push(array[i]);
    }
  }
  // assign objects form new array to the old array
  phoneContacts = allContacts;
  // than invoke the function to print objects from the array
  printInTable(tableBody, phoneContacts);
}

// clear the input fields when pressed on save button
function clearOnSave() {
  firstName.value = "";
  lastName.value = "";
  phoneNum.value = "";
}
