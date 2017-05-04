var firstName = document.getElementById('firstname');

var middleName = document.getElementsByTagName('button')[1];

var lastName = document.querySelector('#lastname');

var nameOne,
    nameTwo,
    nameThree;


firstName.addEventListener('click', function(e){
  nameOne = modUserName(prompt('What is your first name?'));
});

middleName.addEventListener('click', function(e) {
  nameTwo = modUserName(prompt('What is your middle name?'));
});

lastName.addEventListener('click', function(e) {
  nameThree = modUserName(prompt('What is your last name?'));
  alert(nameOne + ' ' + nameTwo + ' ' + nameThree);
});


function modUserName(name) {
  return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
};
