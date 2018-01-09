// used in lesson2.html
var myAge = 27;
var minAge = 16;
var oldEnough = minAge < myAge;

console.log("Am I old enough to drive? " + oldEnough);

var fruitAndVeg = ['apple', 'orange', 'banana', 'kiwi', 'avocado', 'celery', 'aubergine'];
var noAvocados = [];
// var i = 0;
//
// while(i < fruitAndVeg.length) {
//   if(fruitAndVeg[i] !== 'avocado') {
//     noAvocados.push(fruitAndVeg[i]);
//   }
//   i++;
// }

for(var i = 0; i < fruitAndVeg.length; i++) {
  if(fruitAndVeg[i] !== 'avocado') {
    noAvocados.push(fruitAndVeg[i]);
  }
}

function listDomElements() {
  var children = document.body.childNodes;
  for(var i = 0; i < children.length; i++) {
    console.log(children[i]);
  }
}

var outputEl = document.getElementById("output");
outputEl.innerHTML = listDomElements();
