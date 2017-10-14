class Ship { 
	constructor(length) { 
		this.length = length; 
		this.state = []; 
	} 
	constructShip() { 
		for (let i = 0; i < this.length; i++) { 
			let obj = {}; 
			obj.position = null, 
			obj.damaged = false; 
			this.state.push(obj); 
		} 
		return this; 
	} 
} 

class SeaBattle { 
	constructor(ship, mapSize) { 
		this.shots = 0; 
		this.mapSize = mapSize; 
		this.ship = ship; 
		this.damagedDecks = 0; 
	} 
	setShipStartPosition() { 
		var rand = Math.random() * (this.mapSize - this.ship.length + 1); 
		rand = Math.floor(rand); 
		return rand; 
	} 
	setShipPosition() { 
		let pos = this.setShipStartPosition(); 
		for (let i = 0; i < this.ship.length; i++) { 
			this.ship.state[i].position = pos++; 
		} 
	} 
	checkHitting(pos) { 
		let damaged = false; 
		this.ship.state.forEach((item, index) => { 
			if (item.position === +pos - 1 && item.damaged === false) { 
				this.ship.state[index].damaged = true; 
				this.damagedDecks += 1; 
				damaged = true; 
			} 
		}); 
		return damaged; 
	} 
	startBattle() { 
		while (true) { 
			let pos = prompt( 
				`Введите целое число от 1 до ${this.mapSize + 1}`, 
				`1-${this.mapSize + 1}` 
				); 
			// Выход из игры => кнопка отмена на модальном окне. 
			if(pos === null) { 
				return; 
			} 
			this.shots++ 
			if (this.checkHitting(+pos - 1)) { 
				if (this.damagedDecks === this.ship.length) { 
					return alert(`Корабль потоплен за ${this.shots} шагов!`); 
				} 
				alert (`Попал! Осталось ${this.ship.length - this.damagedDecks}`);
			} 
			else { 
				alert ('Мимо!'); 
			} 
		} 
	} 
}
 
let shipLength; 
let battleMapSize 
do { 
	shipLength = +prompt('Введите длину корабля.', ''); 
	battleMapSize = +prompt('Введите длину карты.', ''); 
} while (!(shipLength >= 1 && battleMapSize >= 1) || 
	!(shipLength <= battleMapSize)); 

let startGame = confirm('Начать игру?'); 

if (startGame) { 
	let newBattle = new SeaBattle(new Ship(shipLength).constructShip(), battleMapSize); 
	newBattle.setShipPosition(); 
	newBattle.startBattle(); 
}