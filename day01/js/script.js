/*multiline
comment on js*/


var purple = 'hsla(285, 95%, 60%, .5)';
// variable

let red = 'hsl(10, 90%, 50%)';
// added recently
const ssn = '123-45-6789';
// should never change - constant


console.log('Anna Ingels');
console.log (red);
// only put in quotes if you want it to be a string
// look up scope


// 90% of the time things are OBJECTS

// String Literal
var str = 'anything in quotes';
// String Object
var str2 = new String('this is also a string');
console.log (str2);

// Number - whole number
var num = 7;


// Float - has decimal
var flt = 897589.894758;

// Boolean - true or false, 0 or 1
var bln = true;

//  Array - doesn't matter what you write in here
// based on 0 index
// var arr = [4, flase, 'anna'];

// Object objects - key value pairs
var car = {
  make: 'honda',
  model: 'accord',
  year: 2005
};


// popup -only ok
alert('hello world');

// prompt user to do something
var name = prompt('What is your name?');

// confrim box
confirm('Your name is ' + name);
