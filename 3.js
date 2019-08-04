function three(number) {
	let result = ''
	for (let i = number - 1; i >= 0; i--) {
		for (let j = 0; j <= number - 1; j++) {
			if (j > i) {
				result += '*'
			} else {
				result += ' '
			}
		}
		result += '\n'
	}
	console.log(result)
}

three(5)