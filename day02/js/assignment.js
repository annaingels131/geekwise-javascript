//
// Create a random number generator outputting a number between 1 - 100
// Create a random number generator outputting a number between 0 - 100
//
// Prompt user for their first AND last name
// Convert user response to modify string formatting
// capitalize first letter of both names, and
// lowercase all remaining letters
// example: user input -> MattHeW hiGlEY
// console: Matthew Higley
// Accept a *single name*  from the user and modify
// the capitalization as presented in the challenge.
// If you want to modify a first *AND*  last name,
// you’ll need to present the user with two individual prompts.
//  Modify both values and log both concatenating them together.


var numGen = parseInt(Math.random() * 101);
  console.log(numGen);

var numGen2 = parseInt(Math.random() * 100) + 1;
  console.log(numGen2);

var numGen3 = Math.ceil(Math.random() * 100);
  console.log(numGen3);


var firstName = prompt('What is your first name?').toLowerCase();
var lastName = prompt('What is your last name?').toLowerCase();

  console.log(firstName.trim().charAt(0).toUpperCase()+ firstName.slice(1), lastName.charAt(0).toUpperCase() + lastName.slice(1));
  // ; fullName.slice(1));
