function count_vowels(string) {
	let vocals = 'aiueoAIUEO';
	let result = 0;
	for (let i = 0; i <= string.length; i++) {
		if (vocals.indexOf(string[i]) !== -1) {
			result++
		}
	}
	console.log(result)
}

count_vowels('programmer')
count_vowels('hmm..')