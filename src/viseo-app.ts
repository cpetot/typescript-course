import {Beer} from "./beer";
function greeter(person) {
  return "Hello, " + person;
}

var user = "VISEO man";

var beer = new Beer('Rochefort 10', 11.6);

document.getElementById('container').innerHTML = greeter(user) + ' ' + beer.display();