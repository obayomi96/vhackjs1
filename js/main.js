"use strict";

const ul = document.querySelector("ul");

const deadlineInput = document.getElementById('deadline');
const highPriority = document.getElementById('high');
const mediumPriority = document.getElementById('medium');
const lowPriority = document.getElementById('low');
const submitBtn = document.getElementById('add-btn');

// Add new notes with the Add button

document.getElementById("add-btn").addEventListener("click", addNote);
function addNote(e) {
  e.preventDefault();

  const addInput = document.getElementById("add-input");
  const deadlineInput = document.getElementById('deadline').value;
  const highPriority = document.getElementById('high').value;
  const mediumPriority = document.getElementById('medium').value;
  const lowPriority = document.getElementById('low').value;
  const submitBtn = document.getElementById('add-btn').value;
  // Condition to check if input value is not empty string
  if (addInput.value !== "") {
    const li = document.createElement("li"),
      firstPar = document.createElement("p"),
      secondPar = document.createElement("p"),
      firstIcon = document.createElement("i"),
      secondIcon = document.createElement("i"),
      input = document.createElement("input");

    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = "edit-note";
    input.setAttribute("type", "text");
    // Add input value
    firstPar.textContent = addInput.value;

    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);
    ul.appendChild(li);
    addInput.value = "";
  }
}

// Edit and Delete note
// Edit note

ul.addEventListener("click", editNote);
function editNote(e) {
  if (e.target.classList[1] === "fa-pencil-square-o") {
    const parentPar = e.target.parentNode;
    // Remove edit and delete button while editing note
    parentPar.style.display = "none";

    const note = parentPar.previousElementSibling;
    const input = parentPar.nextElementSibling;
    // Display input field with available input value while submitting
    input.style.display = "block";
    input.value = note.textContent;

    // Submit onclick on the Enter key on keyboard
    input.addEventListener("keypress", submitNote);
    function submitNote(e) {
      if (e.keyCode === 13) {
        // Remove note if value is empty
        if (input.value !== "") {
          note.textContent = input.value;
          parentPar.style.display = "block";
          input.style.display = "none";
        } else {
          const li = input.parentNode;
          li.parentNode.removeChild(li);
        }
      }textContenttextContent
    }
    // Delete note
  } else if (e.target.classList[1] === "fa-times") {
    const list = e.target.parentNode.parentNode;
    list.parentNode.removeChild(list);
  }
}

// Hide and Unhide notes

// const hideNote = document.getElementById("hide");
// hideNote.addEventListener("click", hideUnhideNotes);
// function hideUnhideNotes() {
//   const label = document.querySelector("label");
//   if (hideNote.checked) {
//     label.textContent = "Unhide tasks";
//     ul.style.display = "none";
//   } else {
//     label.textContent = "Hide tasks";
//     ul.style.display = "block";
//   }
// }

// Search note

// const searchInput = document.querySelector("#search-note input");
// searchInput.addEventListener("keyup", searchNote);
// function searchNote(e) {
//   const searchChar = e.target.value.toUpperCase();
//   const notes = ul.getElementsByTagName("li");

//   Array.from(notes).forEach(function(note) {
//     const parText = note.firstElementChild.textContent;

//     if (parText.toUpperCase().indexOf(searchChar) !== -1) {
//       note.style.display = "block";
//     } else {
//       note.style.display = "none";
//     }
//   });
// }
