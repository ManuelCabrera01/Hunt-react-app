const express = require("express");
const router = express.Router();
const Notes = require("../../models/notes");

// DISPLAY YOUR LIST OF noteS
router.get("/notes", (req, res, next) => {
  Notes.find()
    .sort({ date: -1 })
    .then(allTheNotes => {
      res.json(allTheNotes);
    })
    .catch(err => {
      res.json(err);
    });
});
//SINGLEnote POPULATED WITH ITS OWN CONTACTS

router.get("/notes/:id", (req, res, next) => {
  const id = req.params.id;
  Notes.findById(id)
    .then(theNote => {
      res.send({ theNote: theNote });
    })
    .catch(err => {
      next(err);
    });
});

// CREATED A SINGLE note
router.post("/notes/create", (req, res, next) => {
  const { name, date } = req.body;
  const newNote = new Notes({ name, date });
  newNote
    .save()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/notes/:id/delete", (req, res, next) => {
  Notes.findByIdAndRemove(req.params.id)
    .then(reponse => {
      res.json({ sucees: true });
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
