var n  = prompt('Введите n');
function fib(n){
    var a=1, b=1;
    for(var i=3;i<=n;i++){
       var c=a+b;
        a=b;
        b=c;        
    }
    return b;
}
alert (n + '-ое число Фибоначчи = '+ fib(n));