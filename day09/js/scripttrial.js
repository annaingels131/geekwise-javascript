

var newUser = document.querySelector('nav button'),
    newUserForm = document.querySelector('nav form');


newUser.addEventListener('click', function () {
    newUserForm.classList.toggle('hidden');
});


var createUser = document.querySelector('nav form input[type="submit"]')
createUser.addEventListener('click', function (e) {
  e.preventDefault();
  console.log();
});


function userObj(fn, ln, un) {
  this.firstname = fn;
  this.lastname = ln;
  this.username = un;
}
