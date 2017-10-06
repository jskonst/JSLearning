# Repository for JavaScript Learning

1. Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21...
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
Реализуйте задание двумя способами - императивным и с использованием рекурсии.

2. 
function makeArray() {
   var items = [];
   for (var i = 0; i < 10; i++) {
      var item = function() {
         alert( i ); // выводит свой номер
      };
      items.push(item);
   }
   return items;
}
 
var army = makeArray();
 
items[0]();  // item выводит 10, а должен 0
items[5]();  // item выводит 10...