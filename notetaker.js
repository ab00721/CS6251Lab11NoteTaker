/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user 
 */
let notes = [];

updatePageContent();

document.getElementById('add').addEventListener('click', addNotes);
document.getElementById('remove').addEventListener('click', deleteNotes);

/**
 * Updates the displayed notes and updates the options of the drop-down box
 * to reflect the content of the notes array. 
 */
function updatePageContent() {
    if(notes.length == 0) {
        document.getElementById('display-notes').classList.add('display-none');
        document.getElementById('delete-note').classList.add('display-none');
    } else {
        updateNoteList();
        updateDropBox();
    }
}

/**
 * Updates the displayed notes list 
 */
function updateNoteList() {
    let noteList = document.getElementById('notelist');
    noteList.innerHTML = "";
    for (let index = 0; index < notes.length; index++) {
        notes.innerHTML += "<li>" + notes[index] + "</li>"
    }
    document.getElementById('display-notes').classList.remove('display-none');
}

/**
 * Updates the options of the drop-down box to reflect the content of the notes array
 */
function updateDropBox() {
    let selection = document.getElementById('noteselection');
    selection.innerHTML = ""; 
    for (let index = 0; index < notes.length; index++) {
        selection.innerHTML += "<option value=\"" + index + "\">" + notes[index] + "</option>";
    }
    document.getElementById('delete-note').classList.remove('display-none');
}

/**
 * Adds the value of the text input element as element to notes array
 */
function addNotes() {
    let newNote = document.getElementById("newnote").value;
    notes.push(newNote);
    document.getElementById("newnote").value = "";
    updatePageContent();
}

/**
 * Deletes one element of notes array at the index specified by the drop box value
 */
function deleteNotes() {
    let removeNote = document.getElementById("noteselection").value;
    notes.splice(removeNote, 1);
    updatePageContent();
}

