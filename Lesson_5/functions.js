let arr = ['кот', 'ток', 'киборг', 'гробик', 'костер', 'ретсок', 'сектор']; 
let obj = {}; 
arr.forEach((item, index) => { 
	let sorted = item.split('').sort().join(''); 
	if (obj[sorted]) { 
		obj[sorted].push(item); 
	} 
	else { 
		obj[sorted] = []; 
		obj[sorted].push(item); 
	} 
}); 

// Email regex 
let re = /^([0-9a-z]([-\.\w]*[0-9a-z])@([0-9a-z][-\w]*[0-9a-z]\.)+[a-z]{2,9})$/i; 
console.log(re.test('Ael.xaa@19gmail.com')); 

function showTimePastSinceBirthday() { 
	const millisecondsInDay = 24 * 60 * 60 * 1000; 
	const millisecondsInHour = 60 * 60 * 1000; 
	const millisecondsInMinute = 60 * 1000; 
	const millisecondsInSecond = 1000; 
	let dateOfBirth; 
	do { 
		dateOfBirth = prompt('Enter your date of birth.', '1986-07-05'); 
		if (dateOfBirth === null) { 
			break; 
		} 
		dateOfBirth = Date.parse(dateOfBirth); 
	} while (isNaN(dateOfBirth)); 

	let nowDate = Date.now(); 
	let timeDiff = nowDate - dateOfBirth; 

	let days = parseInt(timeDiff / millisecondsInDay, 10); 
	let hoursRaw = timeDiff - (days * millisecondsInDay); 
	let hours = parseInt(hoursRaw / millisecondsInHour, 10); 
	let minutesRaw = hoursRaw - (hours * millisecondsInHour); 
	let minutes = parseInt(minutesRaw / millisecondsInMinute, 10); 
	let secondsRaw = minutesRaw - (minutes * millisecondsInMinute); 
	let seconds = parseInt(secondsRaw / millisecondsInSecond, 10); 
	let milliseconds = secondsRaw - (seconds * millisecondsInSecond); 
	alert(`Since your birthday: 
		days: ${days}, 
		hours: ${hours}, 
		minutes: ${minutes}, 
		seconds: ${seconds}, 
		milliseconds: ${milliseconds}` 
		); 
} 
showTimePastSinceBirthday();