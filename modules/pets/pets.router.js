const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  Pets.get().then((pet) => {
    console.log('sup');
  });
});

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
});

module.exports = router;
