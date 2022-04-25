// Exercise 1

function mathFunction(a, b, c) {
	return new Promise((resolve, reject) => {
		if(typeof a !== 'number'
        || typeof b !== 'number'
        || typeof c !== 'number') {
			return reject(new Error('informe apenas números'));
		}

		const result = (a + b) * c;
		
		if(result < 50) {
			return reject(new Error('Valor muito baixo'));
		}

		resolve(result);
	});
}

mathFunction(10, 10, 10)
	.then((resolve) => console.log(resolve))
	.catch((error) => console.log(error.message));

mathFunction(10, 10, 'a')
	.then((resolve) => console.log(resolve))
	.catch((error) => console.log(error.message));

mathFunction(1, 1, 1)
	.then((resolve) => console.log(resolve))
	.catch((error) => console.log(error.message));

