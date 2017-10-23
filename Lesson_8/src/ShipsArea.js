class ShipsArea {
	constructor(shipTypes, shipsArea) {
		this.shipTypes = shipTypes;
		this.shipsArea = shipsArea;
	}
	drawShips() {
		for (let shipType in this.shipTypes) {
			let count = this.shipTypes[shipType].count;
			let sType = shipType;
			let shipSize = this.shipTypes[shipType].size;
			for (let i = 0; i < count; i++) {
				let shipWrapper = document.createElement('div'),
					shipImage = new Image(),
					sizeWrapper = document.createElement('div');
					
				for (let j = 0; j < shipSize; j++) {
					sizeWrapper.appendChild(this.drawShipLife());
				}	
				sizeWrapper.classList.add('decks');
				shipWrapper.classList.add(sType, 'ship');
				shipImage.style.width = '200px';
				shipImage.src = require(`./img/${sType}.png`);
				shipWrapper.appendChild(shipImage);
				shipWrapper.appendChild(sizeWrapper);
				this.shipsArea.appendChild(shipWrapper);
			}
		}
	}
	drawShipLife() {
		let span = document.createElement('span');
		span.classList.add('ship-dot', 'alive');
		return span;
	}
	markDestroyedShip(shipName) {
		let ship = this.shipsArea.querySelector(`.${shipName}`);
		let decks = ship.querySelectorAll('.alive');
		let audio = document.createElement('audio');
		audio.src = require('./explosion.mp3');
		audio.play();
		decks.forEach((item, index) => {
			decks[index].classList.remove('alive');
			decks[index].classList.add('destroyed');
		});
	}
}

export default ShipsArea;