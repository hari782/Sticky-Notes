document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add-note');
    const notesContainer = document.getElementById('notes-container');

    addNoteButton.addEventListener('click', () => {
        createNote();
    });

    function createNote() {
        const note = document.createElement('div');
        note.classList.add('note');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '&times;';
        deleteBtn.addEventListener('click', () => {
            note.remove();
        });

        const textarea = document.createElement('textarea');
        
        note.appendChild(deleteBtn);
        note.appendChild(textarea);
        notesContainer.appendChild(note);
    }
});
