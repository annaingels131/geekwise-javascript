// accessing external JSON file

// iffy
(function (){
  req('/env.json', setVars);
}());

function req(url, callback) {
  var getReq = new XMLHttpRequest();
  getReq.open('GET', url);
  getReq.onload = function() {
    if(getReq.status === 200 && getReq.readyState === 4) {
      callback(JSON.parse(getReq.responseText));
    }else {
      console.log('error', statusText);
    }
  }
  getReq.send(null);
}


function getJson(obj) {
  obj.favMovies.forEach(function(e) {
    console.log(e);
  });
};


var userDiv = document.getElementById('users'),
    userInput = document.querySelector('input[type="text"]'),
    userSubmit = document.querySelector('input[type="submit"]');

userSubmit.addEventListener('click', function(e){
  e.preventDefault();
  var userQuery = userInput.value;
  var searchUrl = "https://api.github.com/search/users?access_token="+ myVars.get_id() +"q=";
  console.log(userQuery);

});

var myVars;


function setVars(envs) {
  myVars = envVars();
  myVars.set_id(envs.id);
  myVars.set_secret(envs.key);

  console.log(myVars.get_id());
  console.log(myVars.get_secret());
}

// closure
function envVars(data) {
  var id, secret;
    return {
      set_id: function(data) {
        id = data;
      },
      set_secret: function(data) {
        secret = data;
      },
      get_id: function() {
        return id;
      },
      get_secret: function() {
        return secret;
      }
    }
}





// req('https://api.github.com/users/annaingels131', myGithub);
//
//
//
// function myGithub(git){
//   var myGitImg = document.querySelector('img'),
//       myGitH1 = document.querySelector('h1'),
//       myGitP = document.querySelector('p');
//
//   myGitImg.src = git.avatar_url;
//   myGitH1.textContent = git.login;
//   myGitP.textContent = git.name;
//
//
//
// }
