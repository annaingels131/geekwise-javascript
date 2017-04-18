// console.log("hello world");
//
// // Loops
//
// // forward loop
for(var i = 0; i < 10 ; i++){
  // console.log(i);
}
// //
// // // everyother number
for(var i = 0; i < 10 ; i++){
  // console.log(i * 2);
}
// //
// //
// // // i = x where you start
// // // condition i < 20
// // // how many at a time.
for(var i = 0; i < 10 ; i++){
  // console.log(i * 2);
}
// //
var i = 0;
while(i < 10){
  // console.log(i);
  i++;
}
// check condition at all times

//
//
var i = 0;
do {
  // console.log(i);
  i++;
}
while(i < 10);

// go through the loop one time and then go through the condition

// .forEach loop through array - only for arrays

var jeeps = ['wrangler', 'cherokee', 'grand cherokee', 'compass', 'renegade', 'patriot'];

jeeps.forEach(function(item, index){
  // console.log(item);
});

// forIn loop - only for objects - loop through properties and values of an object
var jeep = {
  make: 'jeep',
  model: 'wrangler',
  year:'2014',
  color: 'black',
  doors: '2',
};

for(property in jeep){
  // console.log(property + " : " + jeep[property]);
};
// lists out make, model etc


// if else statements

// if statements
// will execute statement if true
var getTime = new Date().getHours();
if(getTime < 12){
  // alert("Good Morning");
}
else{
  // alert("Good Day or Evening");
};

// if, else if, else
var getTime = new Date().getHours();
if(getTime < 12){
  // alert("Good Morning");
} else if(getTime < 18) {
  // alert("Good Afternoon");
} else {
  // alert("Good Evening");
};

// another if statement
for (var i = 0; i < 10; i++) {
  if (i === 0){
    console.log(i + ' is zero');
  }else if(i % 2 === 0){
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd')
  }
};

// === vs ==
var num = 1
var numString = '1';
console.log(num);
console.log(typeof num);
console.log(numString);
console.log(typeof numString);

if (num === numString){
  console.log('one is one');
}else{
  console.log('one is not one');
};

// == - checks for similarity in what it sees - its values
// === - checks value and data type ie strings vs numbers


// other comparison opperators
var num = 5;
if (num < 6){
  console.log('less than');
} else if(num > 6){
  console.log('greater than');
} else if(num <= 12){
  console.log('less than or equal to');
} else if(num >= 12){
  console.log('greater than or equal to');
} else {
  console.log('other');
}
