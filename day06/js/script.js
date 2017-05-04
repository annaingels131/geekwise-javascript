// DOM (Document Object Model) Manipulation=======

 //Target
/*
// .getElementById()
var btn = document.getElementById('mybtn');

console.log(btn);

// .getElementsByTagName()
var links = document.getElementsByTagName('a');

console.log(links);


// .getElementsByClassName
var dropdownLinks = document.getElementsByClassName('dropdown');

console.log(dropdownLinks);


// .querySelector();
var turkey = document.querySelector('#turkey');
console.log(turkey);

var oneLink = document.querySelector('ul li:last-child a');
console.log(oneLink);


// .querySelectorAll();
var allDropdowns = document.querySelectorAll('.dropdown');
console.log(allDropdowns);

var allSubLinks = document.querySelectorAll('ul li li a');
console.log(allSubLinks);
*/

//============= Event Listeners================

// .addEventListener
var btn = document.getElementById('myBtn');

// click
btn.addEventListener('click', function(){
    btn.style.backgroundColor = 'red';
});

// mousedown
btn.addEventListener('mousedown', function() {
  btn.style.backgroundColor = 'green';
});

//mouseup
btn.addEventListener('mouseup', function() {
  btn.style.backgroundColor = 'blue';
});

//musemove - can find where mouse is
window.addEventListener('mousemove',function(e) {
  console.log(e);
  console.log(e.screenX + ':' + e.screenY);
});

// mouseenter
var btn = document.querySelector('#myBtn');

btn.addEventListener('mouseenter',function() {
  btn.style.fontSize = '2em';
  btn.style.color = "white";
  btn.style.backgroundColor = "black";
});

// mouseleave
btn.addEventListener('mouseleave', function() {
  btn.style.fontSize = '1em';
  btn.style.color = "black";
  btn.style.backgroundColor = "gray";
});

// scroll
window.addEventListener('scroll', function(e) {
  console.log(e);
});

// keypress
window.addEventListener('keypress', function(e) {
  console.log(e);
})

// keydown
window.addEventListener('keydown', function(e) {
  console.log(e);
})

// keyup
window.addEventListener('keyup', function(e) {
  console.log(e);
})





// ==================Functions - whole bunch of code you want inside a container

// Named function delcaration
  // function myName() {
  // //all my code
  //   console.log('not cool');
  // }

    // DOES NOT END IN ;
  // myName();

// Anonymous function
  // function() {
  //   // stuff and things
  // }

// Function expression - will be in global namespace

    // var myName = function() {
    //   console.log('Hello from the other side');
    // }();

// add () between } and ; and it will run right away
// or you can call
// myName();

  // END WITH ; - var must end in ;

// Immediately involed Function Expression (IIFE)

  // (function() {
  //   var test = "This is a test";
  //   alert('This will run');
  // }()
  // );
// Paratheisi around the whole thing
// For encapsualting varibles - make sure they don't bleed out into gloabl namespace
  // var will not leak out into global namespace


  /*----------------Parameter*/
    // function myName( firstname, lastname ) {
    //   console.log(firstname + ' ' + lastname);
    // }

    /*----Argument*/
    // myName('Anna', 'Ingels');


// function timesFive ( x ) {
//   console.log( x * 5);
// }
//


// timesFive();
  // can call items within arguments
  /* var myName = function () {
      console.log(arguments[0] + ' ' + arguments[9]);

      for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
      };
      for loop

      for(a in arguments) {
        console.log(a);
      }
      // incrimentor

    };

    myName('Anna','Red','Blue','Purple',3,4,5,['cool',1,2], true, 'Ingels');
    // can take as many as you want to provide


  // arr.forEach();
  */

// Return Statement - function only going to be called when you need something back
/*
   var myName = getName('Ingels');

   function getName(lastname) {
     return 'Anna ' +lastname;
   }

console.log(myName);

var city = prompt("What city are you from?");
var state = prompt("What state are you from");

var where = birthPlace(city, state);

function birthPlace(city, state) {
  return city + ", " + state
}

console.log(where); */
/*
  var userName = modUserName(prompt('What is your first name?'));
  var lastName = modUserName(prompt('What is your last name'));
  // var cappedUserName = userName.charAt(0).toUpperCase() + userName.substr(1).toLowerCase();

  function modUserName(name) {
    return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();

  }

  console.log(userName + " " + lastName);
*/

// Hoisting will work with functions but not function expression
