const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  People.get().then((person) => res.send(person));
  //Returns them as array
});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  console.log(req.body)
  People.enqueue(req.body.name);
  People.get().then((person) => res.send(person));
});
router.delete('/', (req, res) => {
  People.dequeue();
});
module.exports = router;
