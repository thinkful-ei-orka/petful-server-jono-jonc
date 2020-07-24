const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    let sendback = new Promise((resolve, reject) => {
      // const catToBeAdopted = pets.cats.show();
      // const dogToBeAdopted = pets.dogs.show();
      const result = people.all();
      console.log(result);
      resolve(result, 200);
    });
    return sendback;
  },

  enqueue(person) {
    // Add a person to the queue.
  },

  dequeue() {
    // Remove a person from the queue.
  },
};
