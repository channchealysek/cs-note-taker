const fs = require("fs");
const router = require('express').Router();
const { v4: uuidv4 } = require("uuid");

let notesDb = require('../../db/db.json');

router.get('/notes', (req, res) => res.json(notesDb));
router.post('/notes', (req, res) => {
  req.body.id = uuidv4();
  const newNote = req.body;
  notesDb.push(newNote);
  
  fs.writeFileSync("./db/db.json", JSON.stringify(notesDb));
  res.json(notesDb);
});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  notesDb = notesDb.filter(notes => notes.id != id);
  console.log(id)
  console.log(notesDb)
  fs.writeFileSync("./db/db.json", JSON.stringify(notesDb));
  res.json(notesDb);

});

module.exports = router;