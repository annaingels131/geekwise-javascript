// // strings
//
//
// // .length
// console.log('anystring'.length);
//
// var str = "anotherStrongthisoneverylong";
// console.log(str.length);
//
// // .charAt()
// console.log(str.charAt());
// console.log(str.charAt(8));
//
// // .indexOf()
// console.log(str.indexOf('t'));
// console.log(str.indexOf('s'));
//
// // .concat()
// var hello = 'Hello';
// console.log(hello.concat(' Javascript'));
//
// // .substring()
// var myName = 'Anna';
// console.log(myName.substring(0, 3));
// console.log(myName.substring(3, 6));
// console.log(myName.substring(3));
// console.log(myName.substring(3, 1));
//
// //.substr
// var myHome = 'FresnoYeah';
// console.log(myHome.substr(0, 3));
// console.log(myHome.substr(3, 2));
//
// // .toLowerCase()
// // Good for checking log in info
// var myDog = 'Allie';
// console.log(myDog.toLowerCase());
//
// // .toUpperCase()
// console.log(myDog.toUpperCase());
//
// // .trim()
// var extraSpace = '          stuff       and    things';
// console.log(extraSpace.trim());
//
// // Number Methods
// // Number.isInteger()
// console.log(Number.isInteger(5));
// console.log(Number.isInteger(5.5));
// console.log(Number.isInteger(NaN));
//
// // Number.parseFloat
// console.log(Number.parseFloat('5.2'));
// console.log(Number.parseFloat('365 Word'));
// console.log(Number.parseFloat('Lex is 11'));
//
// // Number.parseInt()
// console.log(Number.parseInt('89.5'));
// console.log(Number.parseInt('words 11'));
// console.log(parseInt('11 words 11'));
//
//
// // // Everything out of a prompt is a strings
// // var userNum = prompt('Pick a number');
// // console.log(userNum);
//
// // if we want a number
// // var userNum = parseInt(prompt('Pick a number'));
// // console.log(userNum);
//
//
// // NaN
// // Number.isNaN()
// // console.log(Number.isNaN(5));
// // console.log(Number.isNaN('anna'));
// // console.log(isNaN('anna'));
// // console.log(Number.isNaN(NaN));
// // console.log(isNaN(NaN));
//
// var userNum = parseInt(prompt("Pick a number"));
//   console.log(!Number.isNaN(userNum));
//   // is the opposite true - !



// Date object
// var newDate = new Date();
// console.log(newDate);
//
// // .getDate() //Date of the month
// console.log(newDate.getDate());
//
// // .getFullYear
// console.log(newDate.getFullYear());
//
// //getDay // day of the week !!zero based
// console.log(newDate.getDay());
//
// // getMonth // get month !!zero based
// console.log(newDate.getMonth());
//
// // var fullMonth = newDate.toLocaleString('en-us', {weekday: 'long'});
// // console.log(fullMonth);
//
// var fullMonth = newDate.toLocaleString('en-us', {month:'long'});
// var numDate = newDate.toLocaleString('en-us', {day:'2-digit'});
// var fullYear = newDate.getFullYear();
//
// console.log(fullMonth + ' ' + numDate +', ' + fullYear);



//Math Object
/*
  + = add
  - = sub
  * = mult
  / = divi
  % = Modulus  remainder - odd or even
    fizz buzz test - 1-100
  ++ = incrementor
  -- = decrementor
*/

// var x = 5;
// console.log(x);
//
// x--;
// console.log(x);
//
// x--;
// console.log(x);
//
// x++;
// console.log(x);
//
//
// for(var x = 0, x < 5; x++){
//   console.log(x);
// };

console.log(60%9);

var rand = Math.random() * 100; //0 - 1
console.log(rand);

var roundUp = Math.ceil(8.3);
console.log(roundUp);

var roundDown = Math.floor(9.9);
console.log(roundDown);

var roundNum = Math.round(4.4999);
console.log(roundNum);

// max() or min()
// pow(x, y)
// sqrt(x)
