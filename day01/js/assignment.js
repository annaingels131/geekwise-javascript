// 1. In assignment.html, create boilerplate & link assignment.js
// 2. Ask for first name, last name, age, & a place
// 3. Ask user is place is correct
// 4. Create a popup messaging first & last name combined
// 5. Log age


var firstname = prompt('What is your First Name?'),
    lastname = prompt('What is your Last Name?'),
    age = prompt('What is your age?'),
    place = prompt('Where are you located?');

alert('Your name is ' + firstname + ' ' + lastname);

// confirm('Are you in ' + place);

console.log(age);

var confirmPlace = prompt('Is ' + place + ' correct?')

while (confirmPlace != 'yes' && confirmPlace != 'Yes') {

  var place = prompt('Where are you REALLY from?');

  var confirmPlace = prompt('Is ' + place + ' correct?');

}
