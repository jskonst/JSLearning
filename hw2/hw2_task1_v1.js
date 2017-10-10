var n  = prompt('Введите n');
function fib(n){
    return n<=1 ? n : fib(n-1) + fib (n-2);
}
alert (n + '-ое число Фибоначчи = '+ fib(n));