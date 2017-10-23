class BattleArea {
	constructor(size, battleArea) {
		this.size = size;
		this.battleArea = battleArea;
	}
	drawBattleSquare() {
		let square = document.createElement('td');
		square.classList.add('square');
		return square;
	}
	drawBattleArea() {
		let table = document.createElement('table');	
		for (let i = 0; i < this.size; i++) {
			let tr = document.createElement('tr');
			for (let j = 0; j < this.size; j++) {
				let td = this.drawBattleSquare();
				td.dataset.row = i;
				td.dataset.column = j;
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
		this.battleArea.appendChild(table);
	}
}

export default BattleArea;