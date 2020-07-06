var name = prompt ('Qual è il tuo nome?');
var lastName = prompt ('Qual è il tuo cognome?');
var age = prompt ('Qual è la tua età?');

while  ((age / 1) != age) {
  alert("Inserire un numero");
  var age = prompt("Qual è la tua età?");
}

document.getElementById("text").innerHTML = name + lastName + age;

