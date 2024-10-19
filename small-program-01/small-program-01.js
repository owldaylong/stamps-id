/* 
INSTRUCTION : 
Please create an array/list of numbers from 1 to 100. Print all these numbers in reverse order, but with the following rules :

Do not print prime numbers.
Replace numbers divisible by 3 with the text "Foo."
Replace numbers divisible by 5 with the text "Bar."
Replace numbers divisible by both 3 and 5 with the text "FooBar."
Print the numbers horizontally, not vertically.
*/

/* ARRAY OF NUMBERS FROM 1 TO 100 (REVERSED + FILTERED NON PRIME NUMBERS ONLY) */
let arrNumbers = []
for (let i = 100; i >= 1; i--) {
	let isPrime = true
	if (i <= 1) {
		isPrime = false
	}
	for (let j = 2; j < i; j++) {
		if (i % j === 0) {
			isPrime = false
			break
		}
	}
	if (!isPrime) {
		arrNumbers.push(i)
	}
}

/* FOO, BAR, FOOBAR CONDITIONAL */
let output = []
for (let i = 0; i < arrNumbers.length; i++) {
	if (arrNumbers[i] % 3 === 0 && arrNumbers[i] % 5 === 0) {
		output.push('FooBar')
	} else if (arrNumbers[i] % 5 === 0) {
		output.push('Bar')
	} else if (arrNumbers[i] % 3 === 0) {
		output.push('Foo')
	} else {
		output.push(arrNumbers[i])
	}
}

console.log(output.join(', '))
