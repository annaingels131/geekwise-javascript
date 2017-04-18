var rightOne = ('no');
var start = prompt('Welcome! Would you like to begin? Type Yes or No.').toLowerCase();
if (start === 'yes'){
 // while (rightOne === 'no'){
  var directionOne = prompt('There are two doors in front of you, do you go Right or Left?').toLowerCase();
  if (directionOne === 'right'){
    var rightOne = prompt('It suddenly got very cold, do you continue? Yes or No?').toLowerCase();
    if (rightOne === 'yes'){
      confirm('You walked into a freezer and died.');
    }else {
    }
  }
// }
  else if(directionOne === 'left') {
    var leftOne = prompt('You are met by two staircases, one going up and one going down, where do you go?').toLowerCase();
    if (leftOne === 'up') {
      var end = prompt('You keep walking up and up and up and up and up and up and then... You see two doors marked "Life" and "Death", which one do you choose?').toLowerCase();
        if(end === 'life') {
          confirm('You win.');
        }else {
          confirm('You died OF COURSE');
        }
    } else if (leftOne === 'down'){
        confirm ('You died because I am tired of this. ');
    } else {
      confirm('You must choose one of OUR options. You died. ');
    }
  }else {
    confirm('Please follow the rules. You died.');
}
}else{
  confirm('You were not ready for the game and you died');
}
