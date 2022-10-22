const fs =require('fs')
const { stringify } = require('querystring')
const add =function (note,OldNote){
    //parse oldNote from String to object of arrays
const newNote = JSON.parse (OldNote)
// add new note to OldNote
   newNote. push (note)

//Save new note to note txt again
fs.writeFileSync('note.txt', JSON.stringify(newNote))
}
module.exports = add



