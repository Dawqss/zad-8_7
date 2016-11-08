var allNames = [];
var womenNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var menNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var newName = 'Marian';
var allNames = allNames.concat(womensNames, mensNames);

console.log(allNames);

function addName(promptName) {
	var promptName = prompt('podaj imię: ');

	if (allNames.indexOf(promptName) == -1) {
		allNames.push(promptName);
		console.log(allNames);
	}
}

addName();