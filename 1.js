function one(number) {
	let result = '';
	for (let i = 0; i <= number - 1; i++) {
		for(let j = 0; j <= i; j++) {
			result += '*';
		}
		result += '\n';
	}
	console.log(result);
}

one(5);