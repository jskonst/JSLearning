window.onload = function() {
	function calcResult(sign, x, y) { 
		switch (sign) { 
			case '+': 
				return x + y; 
			case '-': 
				return x - y; 
			case '*': 
				return x * y; 
			case '/': {
				if (x === y && x === 0) {
					return 'Error';
				}
				return x / y; 
			}
		} 
	} 
	let btn = document.querySelectorAll('.sign'); 
	let res = document.querySelector('.result'); 
	btn.forEach(item => { 
		item.addEventListener('click', () => { 
			let sign = item.dataset.sign; 
			let x = +document.querySelector('[name="x"]').value; 
			let y = +document.querySelector('[name="y"]').value; 
			res.innerHTML = calcResult(sign, x, y); 
		}); 
	}); 
}