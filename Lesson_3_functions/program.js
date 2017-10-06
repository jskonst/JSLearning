//Cycle

function getFibonacciNumberCycle(num){
    var a = 1, b = 0, tempNumber;
  
    while (num > 0){
      tempNumber = a;
      a = a + b;
      b = tempNumber;
      num--;
    }
    return b;
  }

//Recurse

function getFibonacciNumberRecurse(num){
    if (num === 1 || num === 2) {
        return 1;
    }
    else {
        return getFibonacciNumberRecurse(num - 1) + getFibonacciNumberRecurse (num - 2);
    }
}

function makeArray() {
    var items = [];
    for (var i = 0; i < 10; i++) {
    var item = (function(i) {
        return function () {
            alert(i);
        }
    }(i));
    items.push(item);
    }
    return items;
}

var num = prompt("Enter the number:");
alert(getFibonacciNumberCycle(+num));
alert(getFibonacciNumberRecurse(+num));

var items = makeArray();
    
for (item in items) {
    items[item]();
}
