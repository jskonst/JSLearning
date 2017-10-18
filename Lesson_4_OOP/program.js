var wordsArray = ['кот', 'ток', 'токк', 'липа', 'трос', 'полковник', 'пила', 'клоповник', 'торс', 'сорт'];
var obj = {};
for (i = 0; i < wordsArray.length; i++) {
    var propertyName = wordsArray[i].split('').sort().join('');
    if (obj[propertyName]) {
        obj[propertyName] += wordsArray[i] + ', ';
    }
    else {
        obj[propertyName] = wordsArray[i] + ', ';
    }
}
console.log(obj);

//Calculating age

function getAge() {
    var birthDayDate;

    function getBirthdayDate (date) {
        return Date.parse(date);
    }

    while (birthDayDate === NaN || !birthDayDate) {
        var birthDayDate = getBirthdayDate(prompt("Your birthday date is: (format YYYY-MM-DD)"));
    }

    let currentTime = Date.now();
	let dateDiff = new Date(currentTime - birthDayDate);
	let years = dateDiff.getFullYear() - 1970;
	let months = dateDiff.getMonth();
	let days = dateDiff.getDate();
	let hours = dateDiff.getHours();
	let minutes = dateDiff.getMinutes();
	let seconds = dateDiff.getSeconds();

    alert(years + ' years, ' + months + ' months, ' + days + ' days, ' + hours + ' hours, ' + minutes + ' ,minutes, ' + seconds + ' seconds.');
}

//Validating e-mail

function validateEmail(form) {
    let elems = form.elements;
    let pattern = new RegExp( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
    if (elems.address.value) {
    
        if ((elems.address.value).match(pattern)) {
            alert('E-mail is valid!');
            return true;
        }
        else
        {
            alert('E-mail in not in valid format!');
            return false;
        }
    }
    else {
        alert ('It\'s empty!');
        return false;
    }
}

//Play sea battle

function seaBattle() {

    var shot;
    var shotCount = 0;
    var shotResult = '';

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

    function randomGenerator(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    var game = {
        mapSize: 10,
        shipSize: randomGenerator(1,4),
        ship: {
            locations: [],
            damages: []
        },

        createShipLocation: function() {
            var locations;
            locations = this.createShip();
            this.ship.locations = locations;
        },

        createShip: function() {
            var newShipLocation = [];
            let startPosition = randomGenerator(0, this.mapSize - this.shipSize);
            for (i = 0; i < this.shipSize; i++) {
                newShipLocation.push(startPosition++);
            }
            return newShipLocation;
        },

        checkShipState: function() {
            for (i = 0; i < this.shipSize; i++) {
                if (this.ship.damages[i] !== 'damaged') {
                    return false;
                }
            }
            return true;
        },

        checkDamages: function(shot) {
            for (i = 0; i < this.shipSize; i++) {
                if (this.ship.locations[i] === +shot) {
                    if (this.ship.damages[i] === 'damaged') {
                        return false;
                    }
                    else {
                        this.ship.damages[i] = 'damaged';
                        return true;
                    }
                }
                else {
                    continue;
                }
            }
            return false;
        }
    }

    game.createShipLocation();
    while (game.checkShipState() === false) {
        do {
            var shot = prompt("Use numbers from 1 to 10 to shoot, q - for finish game.");
        } while (checkInput(shot) === false);
        if (shot === 'q') {
            break;
        }
        else
        {
            ++shotCount;
            if (game.checkDamages(shot)) {
                shotResult = 'Damaged!';
                alert('Damaged!');
            }
            else {
                shotResult = 'Off target!';
                alert('Off target!');
            }
        }
        console.log("shot: %d, shotCount: %d, result: %s",+shot,shotCount,shotResult);
    }
    console.log('Ship(%d) is destroyed for %d shots',game.shipSize,shotCount);
}

