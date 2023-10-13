"use strict"


// Глобальна змінна
const value = "I'm a global variable";

function foo() {
// Можна звернутися до глобальної змінної
	console.log(value); // "I'm a global variable"
}

foo();
// Можна звернутися до глобальної змінної
console.log(value); 
// "I'm a global variable"