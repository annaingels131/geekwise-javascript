/*

var answer = document.querySelector('input');
var runBtn = document.querySelector('button');

runBtn.addEventListener('click', function(){
  // revAlphWord(answer.value);
  alphWords(answer.value);

});
//Accept user value, arrange words alphabetically

function alphWords(userStr){
  console.log(userStr.split(' ').sort());
}

function revAlphWord(userStr){
  var userStrArray = userStr.split(' ');
  var userStrRev = [];
  userStrArray.forEach(function(word){

    userStrRev.push(word.split('').reverse().join(''));
  });
};

console.log(userStrRev.sort().join(' '));


this always changes based on what it is around
*/

window.addEventListener('mousemove', function(e){
  var winW = this.innerWidth;
  var winH = this.innerHeight;

  var mouseX = e.x;
  var mouseY = e.y;

  var hue = Math.round(mouseX / winW * 360);
  var prec = Math.round(mouseY / winH * 100);
  console.log(prec);
  document.body.style.backgroundColor = 'hsl('+ hue +', '+ prec +'%, '+ prec +'%)';


});





// hsl(0, 50%, 50%);
