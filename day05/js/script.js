// ternary opperators - if then statements

// var age = prompt('How old are you?');

  // if age is greater than 18
  // var movieRestriction = age >= 18 ?
  //   alert('Old enough'):
  //   console.log('Too young');
//considered one line because of the colon

  // if (age > 18) {
  //   console.log('Old enough');
  // } else {
  //   console.log('Too young');
  // };
// same as the statement before it, but less concise

// linking to other pages
  // var url = age >= 18 ?
  //   (
  //     alert('okay, you may proceed'),'proceed.html'
  //   ) :
  //   (
  //     alert('Sorry, you are not old enough for rated R movies'), 'stop.html'
  //   );
  //
  //   window.location.assign(url);


// Switch statement
  // var today = new Date().getDay();
  //
  //   switch(today) {
      // case 0:
      //   console.log('Happy Sunday!');
      //   break;
    //   case 1:
    //     console.log('Sounds like you have a case of the Mondays');
    //     break;
    //   case 2:
    //   console.log('Tuesday Morning');
    //     break;
    //   case 3:
    //     console.log('Wednesday Afternoon');
    //     break;
    //   case 4:
    //       console.log('Thursday');
    //     break;
    //   case 5:
    //       console.log('TGIF');
    //     break;
    //   case 6:
    //       console.log('Staurday');
    //     break;
    //   case 0:
    //   case 6:
    //       console.log('Weekend');
    //     break;
    // };
    //
    // switch (today) {
    //   case 1:
    //     console.log('It is Monday');
    //     break;
    //   case 2:
    //     console.log('It is Tuesday');
    //     break;
    //     default:
    //     console.log('It is not Monday or Tuesday');
    //
    // }

// || = or

  // Var, let or const

  // cluttering the global namespace - bad practice
  // var coffee = 'Dutch Bros';
  //
  // function myCoffee() {
  //   var coffee = 'Starbucks';
  //   console.log(coffee);
  //
  //   coffee = 'Peets';
  //   console.log(coffee);
  //
  //   var otherCoffee = 'Dunkin';
  //   // declared this globally
  // }
  //
  // myCoffee();
  // // calling the function
  //
  // console.log(coffee);
  // console.log(otherCoffee);


  // for(var i = 0; i < 5; i++){
  //   console.log('loop 1', i);
  // }
  //
  // for(var j = 0; j < 5; j++){
  //   console.log('loop 2', j);
  // }

  // console.log(i);
  //
  // for(let i = 0; i < 5; i++){
  //   console.log('loop 1', i);
  // }
  //
  // console.log(i);
  // let coffee = 'Starbucks';
  // let cofee = 'Lanna';
  // Can't redeclare variable name

  // function myCoffee() {
  //   let coffee = 'Dutch Bros'
  //   console.log(coffee);
  // }
  //
  // myCoffee();
  //
  // coffee = 'Dunkin';
  // console.log(coffee);

// Var is function scope

// Let is block scope


// Const
  // const newCoffee = 'Lanna';
  // console.log(newCoffee);
  //
  // newCoffee = 'Peets';
  // console.log(newCoffee);

// Good for things tht are never going to change

// Variable Hoisting

  //
  // console.log(x);
  // console.log(y);
  // console.log(z);
  //
  // var x = 1;
  // let y = 2;
  // const z = 3;

//let and const can't be hoisted
  // myFunct();
  //
  // myFunct = function() {
  //   console.log('stuff and things');
  // }

  
