// This is where all the practise code from the Introduction to Javascript tutorial goes

function hello(person) {
  return greeting(person);
}

function conversation(person, topic) {
  hello(person);
  console.log("How are you?");
  console.log("Do you like " + topic + "?");
}

function greeting(person) {
  return "Hello " + person + "!";
}

var person_a = {
  first_name: "Dina",
  likes: "ice-cream"
}

var person_b = person_a;
