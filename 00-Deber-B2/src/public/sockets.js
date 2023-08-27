const socket = io();
const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title: title,
        description: description,
    })
};

socket.on('server:newnote', appendNote);

socket.on('server:loadnotes', loadNotes);