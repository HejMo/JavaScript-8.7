var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

console.log('Imiona damskie :');
console.log(womensNames);
console.log('Imiona męskie :');
console.log(mensNames);
console.log('Wszystkie imiona razem :');
console.log(allNames);

var newName = 'Arek';  // Sprawdź Marian
console.log('Dodajmy imię: ' + newName);
if (allNames.indexOf(newName) == -1) {
	allNames.splice(4, 0, newName)
	console.log (allNames)
} else {
	console.log('Imię się powtarza, wybierz inne')
}
