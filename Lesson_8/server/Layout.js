module.exports = class Layout {
  constructor(areaSize) {
    this.areaSize = areaSize;
    this.layout = [];
    this.shipTypes = {
      carrier: { size: 5, count: 1 },
      battleship: { size: 4, count: 1 },
      cruiser: { size: 3, count: 1 },
      submarine: { size: 3, count: 1 },
      destroyer: { size: 2, count: 1 }
    }
  }
  createMatrix() {
    let areaSize = this.areaSize;
    let arr = [];
    for (let i = 0; i < areaSize; i++) {
      arr[i] = [];
      for(let j = 0; j < areaSize; j++) {
        arr[i][j] = 0;
      }
    }
    this.matrix = arr;
  }
  randomInteger(max) {
    return Math.floor(Math.random() * max);
  }
  checkLocation(x, y, direction, shipSize) {
    let fromX, toX, fromY, toY;
    let areaSize = this.areaSize;
    fromX = x === 0 ? x : x - 1;
    fromY = y === 0 ? y : y - 1;
    if (direction) {
      toY = y + 2;
      if (x + shipSize === areaSize) {
        toX = areaSize;
      }
      else {
        toX = x + shipSize + 1;
      }
    }
    else {
      toX = x + 2;
      if (y + shipSize === areaSize) {
        toY = areaSize;
      }
      else {
        toY = y + shipSize + 1;
      }
    }
    for (let i = fromX; i < toX; i++) {
      for (let j = fromY; j < toY; j++) {
        if (this.matrix[i][j] == 1) {
          return false;
        }
      }
    }
    return true;
  }
  createShip(shipSize) {
    let areaSize = this.areaSize;
    let x = this.randomInteger(areaSize);
    let y = this.randomInteger(areaSize);
    let direction = this.randomInteger(2);
    let shipCoords = [];
    x = areaSize - x >= shipSize ? x : areaSize - shipSize;
    y = areaSize - y >= shipSize ? y : areaSize - shipSize;
    if (this.checkLocation(x, y, direction, shipSize)) {
      if (direction === 1) {
        for (let i = 0; i < shipSize; i++) {
          this.matrix[x][y] = 1;
          let shipCoord = [x, y];
          shipCoords.push(shipCoord);
          x += 1;
        }
      }
      else {
        for (let i = 0; i < shipSize; i++) {
          this.matrix[x][y] = 1;
          let shipCoord = [x, y];
          shipCoords.push(shipCoord);
          y += 1;
        }
      }
      return shipCoords;
    }
    else {
      return this.createShip(shipSize);
    }
  }
  createLayout() {
    let data = {};
    this.createMatrix();
    for (let ship in this.shipTypes) {
      let obj = {};
      obj.ship = ship;
      obj.positions = this.createShip(this.shipTypes[ship].size);
      this.layout.push(obj);
    }
    data.shipTypes = this.shipTypes;
    data.layout = this.layout;
    return data;
  }
}