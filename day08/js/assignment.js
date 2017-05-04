// Calulator - alert answer
var numOne = document.getElementsByTagName('input')[0],
    numTwo = document.getElementsByTagName('input')[1],
    add = document.getElementsByTagName('input')[2],
    sub = document.getElementsByTagName('input')[3],
    mult = document.getElementsByTagName('input')[4],
    divi = document.getElementsByTagName('input')[5];



console.log(numOne);
add.addEventListener('click', function() {
  alert(parseInt(numOne.value) + parseInt(numTwo.value));
});

sub.addEventListener('click', function() {
  alert(parseInt(numOne.value) - parseInt(numTwo.value));
});

mult.addEventListener('click', function() {
  alert(parseInt(numOne.value) * parseInt(numTwo.value));
})

divi.addEventListener('click', function() {
  alert(parseInt(numOne.value) / parseInt(numTwo.value));
});


/*
var calcVals  = document.getElementById('calcVals');
for (var i = 0; i < calcVals.children.length; i++) {
  calcVals.children[i].addEventListener('click', doCalc());
};

function doCalc(e) {

  e.preventDefault();

switch(this.name) {
  case '+':
    alert(parseInt(numOne.value) + parseInt(numTwo.value));
    break;
  case '-':
    alert(parseInt(numOne.value) - parseInt(numTwo.value));
    break;
  case '*':
    alert(parseInt(numOne.value) * parseInt(numTwo.value));
    break;
  case '/':
    alert(parseInt(numOne.value) / parseInt(numTwo.value));
    break;
};

};*/




// Days until Chirstmas
// Declare a date
// var deadline = 'Mon Dec 25 2017 00:00:00 GMT-0800 (PST)';
// console.log(christmas);
var timer = setInterval(function() {
  var today = new Date();
  var end = new Date(today.getFullYear(), 11, 25) - today;
  var days = Math.ceil(end / (1000 * 60 * 60 * 24));
  var christmas = document.getElementsByTagName('input')[6];
      christmas.value = days +' days left';

      // if(today.getMonth() == 11 && today.getDate() > 25){
      //   end.getFullYear(end.getFullYear() + 1);
      // };

  // console.log(days);
});


// Convert temp

var convert = document.getElementsByTagName('input')[7],
    finished = document.getElementsByTagName('input')[10],
    cel = document.getElementsByTagName('input')[8],
    fahr = document.getElementsByTagName('input')[9],
    convertBtn = document.getElementsByTagName('input')[11];


function runTemp() {
  var temperature = Number(convert.value),
      tempType,
      result;


    if (fahr.checked) {
      result = (temperature - 32) * 5/9;
      finished.value = Math.round(result);
    } else {
      result = temperature * 9/5 + 32;
      finished.value = Math.round(result);
    }

};

convertBtn.addEventListener('click', function(e) {
  e.preventDefault();
  runTemp();
});


/*
// CALCULATE CHALLENGE
var val1 = document.querySelector('input[name="val1"]');
var val2 = document.querySelector('input[name="val2"]');
var calcVals = document.getElementById('calcVals');

for(let i = 0; i < calcVals.children.length; i++){
    calcVals.children[i].addEventListener('click', doCalc);
}

function doCalc(e){
    e.preventDefault();

    switch(this.name){
        case '+':
            alert( parseInt(val1.value) + parseInt(val2.value) );
            break;
        case '-':
            alert( parseInt(val1.value) - parseInt(val2.value) );
            break;
        case '*':
            alert( parseInt(val1.value) * parseInt(val2.value) );
            break;
        case '/':
            alert( parseInt(val1.value) / parseInt(val2.value) );
            break;
    }
}


// CHRISTMAS CHALLENGE
var xmasForm = document.getElementById('xmas');
var today = new Date();
var xmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() == 11 && today.getDate() > 25){
    xmas.setFullYear(xmas.getFullYear() + 1);
}

var oneDay = 1000*60*60*24;
xmasForm.children[0].value = Math.ceil((xmas.getTime() - today.getTime()) / oneDay);


// CELCIUS/FAHRENHEIT CONVERTER
var temp = document.querySelector('#temp .convert input[type="text"]');
var tempCon = document.querySelector('#temp .converted input');
var tempBtn = document.querySelector('#temp input[type="submit"]');
var tempUnit = document.querySelectorAll('#temp input[type="radio"]');

tempBtn.addEventListener('click', function(e){
    e.preventDefault();

    var userTemp = temp.value;
    var userUnit;

    tempUnit.forEach(function(el){
        if(el.checked){
            userUnit = el.value
        }
    });

    if(userUnit === 'F'){
        tempCon.value = (5/9) * (userTemp - 32);
    }
    if(userUnit === 'C'){
        tempCon.value = (userTemp * 9 / 5 + 32);
    }
});*/
