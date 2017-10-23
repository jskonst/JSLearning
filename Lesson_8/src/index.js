import config from './data.json';
import './index.css';
import PubSub from './PubSub';
import StepsCounter from './StepsCounter';
import BattleArea from './BattleArea';
import ShipsArea from './ShipsArea';
console.log(config.shipTypes);
//
let layout = config.layout;
let areaSize = config.size;
let shipTypes = config.shipTypes;
let counter = 0;
let battleArea = document.querySelector('#battleArea');
let counterArea = document.querySelector('#stepsCounter');
let shipsArea = document.querySelector('#shipsArea');
let resultText = document.querySelector('#resultText');

let stepsCounter = new StepsCounter(counterArea);
let battleField = new BattleArea(areaSize, battleArea);
let shipsField = new ShipsArea(shipTypes, shipsArea);

stepsCounter.render();
shipsField.drawShips();
battleField.drawBattleArea();

function checkSquare(e) {
	let target = e.target.closest('td');
	if (target) {
		let list = target.classList;
		let row = +target.dataset.row;
		let column = +target.dataset.column;
		let damaged = false;
		let isNew = false;
		let shipName;
		layout.forEach(function(item, i) {
			item.positions.forEach(function(arr, j) {
				if (!target.classList.contains('damaged') && 
					!target.classList.contains('missed')
				) {
					isNew = true;
					if (arr[0] === row && arr[1] === column) {
						damaged = true;
						layout[i].positions.splice(j, 1);
						if (!layout[i].positions.length) {
							layout.splice(i, 1);
							shipName = item.ship;
						}
					}
				}
			});
		});
		if (isNew) {
			PubSub.emit('statsChanged', ++counter);
			let cross = document.createElement('i');
			cross.classList.add('fa', 'fa-times');
			if (damaged) {
				target.classList.add('damaged');
				target.appendChild(cross);
				if (shipName) {
					PubSub.emit('shipDestroyed', shipName);
				}
			}
			else {
				target.classList.add('missed');
				target.appendChild(cross);
			}
		}
		if (!layout.length) {
			let resultText = document.querySelector('.result-text');
			resultText.innerHTML = `Вы потопили все корабли за ${counter} шагов!!!`;
		}
	}
	return;
}

let area = document.querySelector('table');
area.addEventListener('click', checkSquare);

PubSub.on('statsChanged', stepsCounter.setSteps.bind(stepsCounter));
PubSub.on('shipDestroyed', shipsField.markDestroyedShip.bind(shipsField));
