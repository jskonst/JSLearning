//Common variables. MAP_SIZE is constant!
//The 'map' will include ship location and empty fields.

var shot;
var shotCount = 0;
var damageCount = 0;
var result = '';
var shipDestroyed = false;
var map = [];
var MAP_SIZE = 10;

//This function will check user input

function checkInput(num) {
    let reg = /^[1-9]$|^10$|^q$/;
    if (num.match(reg))
    {
        return true;
    }
    else
    {
        alert ('Incorrect input!');
        return false;
    }
}

/*
This function will generate ship size 
and start position of the ship on the map
*/

function randomGenerator(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

/*
This function will create the map and a location of the ship on it.
The ship will be present as sequence of '1' value in array 'map'.
Example: map = [0,0,0,0,1,1,1,0,0,0]
*/

function createArea(mapSize, shipSize) {
    let firstPosition = randomGenerator(0, mapSize - shipSize);
    for (i = 0; i < mapSize; i++)
    {
        if (i < firstPosition || i > firstPosition + shipSize - 1)
        {
            map.push(0);
        }
        else
        {
            map.push(1);
        }
    }
    return map;
}

//This function will check ship state: destroyed or not

function checkShipState(arr) {
    return arr.indexOf(1);
}

//Generating ship size, map and location of a ship

var mapSize = MAP_SIZE;
var shipSize = randomGenerator(1,4);
var map = createArea(mapSize, shipSize);

//A process of game
while(!shipDestroyed){
    do {
    var shot = prompt("Use numbers from 1 to 10 to shoot, q - for finish game.");
    } while (checkInput(shot) !== true);
    if (shot !== 'q')
    {
        ++shotCount;
        if (map[shot - 1]===1){
            ++damageCount;
            /*
            Replace '1' to 'zero' in array 'map'
            because this part of the ship is destroyed
            */ 
            map[shot - 1] = 0;
            if (checkShipState(map) !== -1)
            {
                result = 'Damaged!'
                alert ('Ship is damaged!');
            }
            else
            {
                alert ('Ship is destroyed!');
                console.log('Ship(%d) is destroyed for %d shots',shipSize,shotCount);
                shipDestroyed = true;
                break;
            }
        }
        else
        {
            result = 'Off target!'
            alert('Off target!');
        }
    }
    else
    {
        break;
    }
    console.log("shot: %d, shotCount: %d, result: %s",+shot,shotCount,result);
}

