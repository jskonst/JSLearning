// First task

// 1) Using recursion
function fib(n) {
	if (n >= 1) {
		let bool = (n === 1 || n === 2);
		return bool ? 1 : fib(n - 1) + fib(n - 2);
	}
} 

// 2) Using loop
function fib(n) {
	let x = 1,
			y = 1;
	for (let i = 3; i <= n; i++) {
		let z = x + y;
		x = y;
		y = z;
	}
	return y;
}


// Second task

function makeArray() {
	var items = [];
	for (var i = 0; i < 10; i++) {
		var item = (function(j) {
			return function() {
				alert(j);
			}
		}(i));
		items.push(item);
	}
	return items;
}
/* 
	 Вложенная функция, показывающая модальное окно с помощью alert, 
   получает внутреннее свойство scope, в котором находится ссылка на 
   объект lexicalEnvironment окружения (самовызвающаяся функция) , 
   в котором она была создана.

*/