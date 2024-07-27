let col = 5;
for (let i = 1; i <= col; i++) {
	let result = '';
	for (let j = 1; j <= i; j++) {
		result += j;
	}
	console.log(result);
}


// Right Angle triangle star pattern
let max = 5;
for (let i = 1; i <= max; i++) {
	let result = '';
	for (let j = 1; j <= i; j++) {
		result += '*';
	}
	console.log(result);
}