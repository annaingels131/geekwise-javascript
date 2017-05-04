// THIS KEYWORD - changes based on content
  /*function simpleFunction() {
    console.log(this);
  }

  simpleFunction();


  var btn = document.querySelector('button');

    // don't add parenthesis because they run the function right away doesn't wait for click event
  btn.addEventListener('click', colorize);

  function colorize(e) {
    this.style.color = 'red';
    console.log(this);
    console.log(e);
  }


// Creating things dynamically
// CreateElements

var body = document.body;

var header = document.createElement('header'),
    nav = document.createElement('nav'),
    main = document.createElement('main'),
    article = document.createElement('article'),
    img = document.createElement('img'),
    aside = document.createElement('aside'),
    footer = document.createElement('footer');

var navUl =
  '<ul>'+
    '<li>'+
      '<a href="#">nav 01</a>'+
    '</li>'+
    '<li>'+
      '<a href="#">nav 02</a>'+
    '</li>'+
    '<li>'+
      '<a href="#">nav 03</a>'+
    '</li>'+
  '</ul>';

var linkName = 'google';
var navTemplateString = `
  <ul>
    <li>
      <a href="#">${linkName}</a>
    </li>
    <li>
      <a href="#">nav 05</a>
    </li>
    <li>
      <a href="#">nav 06</a>
    </li>
  </ul>
`;


// appendChild vs append
nav.innerHTML = navTemplateString;
// nav.innerHTML = navUl;
header.appendChild(nav);
article.textContent = 'Stuff and things...';
article.id = 'mainArticle';
main.appendChild(article);
article.appendChild(img);
img.src = 'http://unsplash.it/200/165?image=200';
img.alt = 'picture of a fuzzy cow';
img.setAttribute('width', '500')
aside.className = 'asideClass';
main.appendChild(aside);
//
// body.appendChild(header);
// body.appendChild(main);
// body.appendChild(footer);

body.append(header, main, footer);
// not well supported


console.log(body);
*/
