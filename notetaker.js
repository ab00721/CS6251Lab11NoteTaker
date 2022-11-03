/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user 
 */
let notes = [];

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

}

function addNotes() {

}

function deleteNotes() {

}

