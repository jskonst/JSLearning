function userInput(id) {
  document.calc.result.value+=id;
}

function clearInput() {
  document.calc.result.value="";
}

function calculateResult() {
  try {
    var input = eval(document.calc.result.value);
    document.calc.result.value=input;
  } 
  catch(err){
      document.calc.result.value="Error";
    }
}