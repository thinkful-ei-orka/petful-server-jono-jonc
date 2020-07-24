const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();
//Get All
router.get('/', json, (req, res) => {
  Pets.get().then((pet) => res.send(pet));
});

router.delete('/:type', json, (req, res) => {
  // console.log(req);
  Pets.dequeue(req.params.type);
  return Pets.get().then((pet) => res.send(pet));
});

module.exports = router;
