/* Write an ES2015 Version */

const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

/*COMPUTED PROPERTY NAMES // Write an ES2015 Version */

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}


/*Object Methods */

const instructors = {
    firstName: "Colt",
    sayHi() {
        return "hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}

/*
createAnimal function
Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered. */

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }