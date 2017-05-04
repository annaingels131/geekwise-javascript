var body = document.body;

/*var div = document.createElement('div'),
    img = document.createElement('img'),
    h1 = document.createElement('h1'),
    p = document.createElement('p'),
    link = document.createElement('a');

var container = document.createElement('div');


div.appendChild(img);
img.src = 'http://unsplash.it/300';
img.alt = 'mountains';
div.appendChild(h1);
h1.textContent = 'Anna Ingels';
div.appendChild(p);
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandaeLorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, repudiandae';
div.appendChild(link);
link.textContent = 'MORE...';
link.href = '#';

body.appendChild(div); */

var div = document.createElement('div'),
    container = document.createElement('form'),
    userName = document.createElement('input'),
    password = document.createElement('input'),
    button = document.createElement('button');

container.appendChild(userName);
userName.type = 'text';
userName.placeholder = 'username';
container.appendChild(password);
password.type = 'text';
password.placeholder = 'password'
container.appendChild(button);
button.textContent = 'submit';
button.type = 'submit';

div.append(container);
body.append(div);
body.appendChild(container);
