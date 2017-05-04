var keyPress = document.querySelector('#keypress');
var letterPress = document.querySelector('#letterpress');

window.addEventListener('keypress', function(e){
  console.log(e.key + ' ' + e.keyCode);
  keyPress.innerHTML = '<p>' + e.keyCode + '</p>';
  letterPress.innerHTML = '<p>' + e.key + '</p>';
  if(e.keyCode === 32 ){
    letterPress.innerHTML = '<p> spacebar </p>';
  }
});
