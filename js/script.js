var allNames = []
var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian';

var allNames = allNames.concat(womensNames, mensNames);
console.log(allNames);

var testIndexOf = allNames.indexOf(newName);
console.log(testIndexOf);

if (allNames.indexOf(newName) == -1) {
	allNames.push(newName);
}

console.log(allNames);

function addName(promptName) {
	var promptName = prompt('podaj imię: ');

	if (allNames.indexOf(promptName) == -1) {
		allNames.push(promptName);
		console.log(allNames);
	}
}

addName();