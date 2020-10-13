const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);    
    if (note) {
        console.log(chalk.underline(title));
        console.log(note.body);
    } else {
        console.log(chalk.inverse.underline("sorry, that note wasn't found"));
    }
    
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    const duplicateNote = notes.find((note) => note.title === title);
    if (duplicateNote) {
        console.log(chalk.red.inverse("sorry, that title has already been taken"));
    } else {
        console.log(chalk.green.inverse("your note has been added"))
        notes.push({
            title: title,
            body: body
        })
    saveNotes(notes);
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
       return note.title !== title
    });
    if (notesToKeep.length < notes.length) {
        console.log(chalk.green("note was removed")); 
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red("no note found"));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length === 0 ) {
        console.log(chalk.bgRed("Sorry, no notes to list"));
    } else {
        console.log(chalk.underline.yellow("List"));
        notes.forEach((note) => {
        console.log(chalk.yellow(note.title));
        })
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote 
}
