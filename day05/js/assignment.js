var start = confirm("OH MY GOD! You are TOTALLY invited to Trish's totally awesome SLEEPOVER! Are you gunna come or what?")
 while(start === false){
  alert("Um okay? You will totally sit at the loser table for like ever if you don't come...You have to come.");
  var start = true;
};

while (nickname !== true) {
  var name = prompt('Okay, what should we call you tonight? You can like come up with your own nickname.').charAt(0).toUpperCase();
  var nickname = confirm('Omg we are going to call you ' + name + '.');
};

var boyfriend = ['Todd', 'Justin', 'Andy', 'Dawson', 'Drew', 'Billy', 'Mark', 'David'];
var randomBoyfriend = boyfriend[Math.floor(Math.random() * boyfriend.length)];

var something = prompt('Okay ' +  name + ' are you ready? Truth or Dare?').toLowerCase();
  switch(something){
    case 'truth':
      var truth = confirm("Okayyyy! Are you like TOTALLY into Janet's bf " + randomBoyfriend + "?");
      break;
    case 'dare':
      var dare = confirm('Omg we dare you to TOTALLY call Brad and tell him he is CUTE!!');
      break;
    default:
      var other = confirm('OMG. LIKE choose. Come on.');
      if (true) {
        var truth = confirm("Okay TRUTH! Are you like TOTALLY into Janet's bf" + randomBoyfriend + "?");
      }else {
        var dare = confirm('Okay, DARE. Omg we dare you to TOTALLY call Brad and tell him he is CUTE!!');;
      }
  }

  if (truth === true){
    alert('OMG you can NOT be serious');
    window.location = 'leave.html';
  }else{
    var dare = confirm('Okay now Dare! Omg we dare you to TOTALLY call Brad and tell him he is CUTE!!!');
  }

  if (dare === true){
    alert('OMG WE CAN NOT BELIEVE YOU DID THAT! You are totally like IN!');
  }else{
    window.location = 'leave.html';
  }
