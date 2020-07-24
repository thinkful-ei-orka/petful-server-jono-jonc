const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    let sendback = new Promise((resolve, reject) => {
      // const catToBeAdopted = pets.cats.show();
      // const dogToBeAdopted = pets.dogs.show();
      const result = { cat: pets.cats.show(), dog: pets.dogs.show() };
      resolve(result, 200);
    });
    return sendback;
    //Get first in line for cat
    //Get first in line for dog
    // Return the pets next in line to be adopted.
  },

  // Remove a pet from the queue.
  dequeue(type) {
    if (type == 'both') {
      pets.cats.dequeue();
      pets.dogs.dequeue();
    } else if (type == 'cat') {
      pets.cats.dequeue();
    } else if (type == 'dog') {
      pets.dogs.dequeue();
    } else {
      return null;
    }
  },
};
