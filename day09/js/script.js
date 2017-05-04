var userArr = [];



// Listen for a newUser click

var newUser = document.querySelector('nav button'),
    newUserForm = document.querySelector('nav form');

newUser.addEventListener('click', function() {
  newUserForm.classList.toggle('hidden');
  // newUserForm.reset();
});


// Listen for a CreateUser click

var createUserBtn = document.querySelector('nav form input[type="submit"]');
  createUserBtn.addEventListener('click', function(e) {
    e.preventDefault();

    // var user1 = new NewUserObj('anna', 'ingels', 'aingels');
    createUser(newUserForm.elements);
    newUserForm.classList.toggle('hidden');
    newUserForm.reset();
  });

function NewUserObj(fn, ln, un, av) {
  this.firstname = fn;
  this.lastname = ln;
  this.username = un;
  this.avatar = av;

};

function createUser(obj) {
  userArr.push(new NewUserObj(obj[0].value, obj[1].value, obj[2].value, makeAvatar()
));
  outputUser();

};

function makeAvatar() {
  var avatarBox = document.createElement('ul');
  for(let i = 0; i < 16; i++){
    var avatarBlock = document.createElement('li');
    avatarBlock.style.backgroundColor = 'white';
      if(Math.floor(Math.random() * 2)){
        avatarBlock.style.backgroundColor = randColor();
      }
      avatarBox.append(avatarBlock);
  }
  return avatarBox.outerHTML;
};

function randColor() {
  var letter = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}


function outputUser() {
  var userProfiles = document.getElementById('userProfiles');
      userProfiles.innerHTML = '';

  for (let i = 0; i < userArr.length; i++) {
      var userLi = document.createElement('li'),
          userH1 = document.createElement('h1'),
          userDiv = document.createElement('div');

        userH1.textContent = userArr[i].username;
        userDiv.innerHTML = userArr[i].avatar;
        userLi.append(userDiv, userH1);
        userProfiles.append(userLi);

  }

}







/*
// OBJECTS
var meObj = {
  firstname: 'anna',
  lastname: 'ingels',
  hair: 'blonde',
  eyes: 'green',
  height: 5,
  talk: function() {
    console.log('Hello, my name is '+ this.firstname + ', and my eyes are ' + this.eyes);
  }

};

meObj.eyes = 'blue';


// Object constructor - cap letter
function Person(first, last, age, eye){
  this.firstname = first;
  this.lastname = last;
  this.userage = age;
  this.eyes = eye;

};

var myFather = new Person('John', 'Doe', 45, 'blue');

myFather.userage = 46;
console.log(myFather);

var myMother = new Person('Jane', 'Doe', 39, 'green');
console.log(myMother);
*/
