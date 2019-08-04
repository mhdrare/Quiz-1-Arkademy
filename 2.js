function two(number) {
	let result = '';
	for (let i = number - 1; i >= 0; i--) {
		for (let j = i ; j >= 0; j--) {
			result += '*';
		}
		result += '\n';
	}
	console.log(result);
}

two(5);