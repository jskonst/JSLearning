function chooseWordEnding(count) { 
	let steps; 
	switch (count % 10) { 
		case 1: { 
			steps = 'шаг'; 
			break; 
		} 
		case 2: 
		case 3: 
		case 4: { 
			steps = 'шага'; 
			break; 
		} 
		case 0: 
		case 5: 
		case 6: 
		case 7: 
		case 8: 
		case 9: { 
			steps = 'шагов'; 
			break; 
		} 
	} 
	return steps; 
} 

function randomInteger(min, max) { 
	var rand = min + Math.random() * (max + 1 - min); 
	rand = Math.floor(rand); 
	return rand; 
} 

function createShip() { 
	let ship = []; 
	let startPosition = randomInteger(0, 4); 
	for (let i = 0; i < 3; i++) { 
		ship.push(startPosition++); 
	} 
	return ship; 
} 

function startGame() { 
	let counter = 0; 
	let ship = createShip(); 
	while (true) { 
		let position = prompt('Введите целое число от 0 до 6', '0-6'); 
		counter++; 
		if (position === null) { 
			return; 
		} 
		if (~ship.indexOf(+position)) { 
			ship = ship.filter(item => item !== +position); 
			if (!ship.length) { 
				alert('Потопил!'); 
				break; 
			} 
			alert('Попал!'); 
		} 
		else { 
			alert('Мимо!'); 
		} 
	} 

	alert(`Корабль потоплен за ${counter} ${chooseWordEnding(counter)}.`); 
} 

let startButton = document.querySelector('button'); 

startButton.addEventListener('click', startGame);