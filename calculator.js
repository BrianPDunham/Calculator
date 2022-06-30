const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const ADDITION = 0;
const SUBTRACTION = 1;
const MULTIPLY = 2;
const DIVIDE = 3;
const FINISH = 4;
async function getOperation() {
  let isSelectingOp = true;

  while (isSelectingOp) {

    let Operations = await rl.question("What operation? \n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Finish\n");
    if (Operations === "1") {
      isSelectingOp = false;
      return ADDITION;
    }
    else if (Operations === "2") {
      isSelectingOp = false;
      return SUBTRACTION;
    }
    else if (Operations === "3") {
      isSelectingOp = false;
      return MULTIPLY;
    }
    else if (Operations === "4") {
      isSelectingOp = false;
      return DIVIDE;
    }
    else if (Operations === "5") {
      isSelectingOp = false;
      return FINISH;
    }
    else {
      console.log("Invalid Input");
    }
  }
}

async function getOperand() {
  let isSelectingOperand = true;
  let Operand;
  while (isSelectingOperand) {
    Operand = parseFloat(await rl.question("Input Operand: "));
    if (!(isNaN(Operand))) {
        isSelectingOperand = false;    
    }
    else {
      console.log("Invalid Input");
    }

  }
  return Operand;
}

function compute (selectedOperation, firstOperand, secondOperand) {
  if (selectedOperation === ADDITION) {
    return firstOperand + secondOperand;
  }
  else if (selectedOperation === SUBTRACTION) {
    return firstOperand - secondOperand;
  }
  else if (selectedOperation === MULTIPLY) {
    return firstOperand * secondOperand;      
  }
  else if (selectedOperation === DIVIDE) {
    return firstOperand / secondOperand;
  }
}

(async () => {
  let selectedOperation
  let isSelectingOperation = true;
  while (isSelectingOperation) {
    selectedOperation = await getOperation();
    if (selectedOperation !== FINISH) {
      isSelectingOperation = false;
    }
    else if (selectedOperation === FINISH) {
      console.log("Error. Must select at least one operation.")
    }
  }

  let firstOperand = await getOperand();
  let secondOperand = await getOperand();
  let result = compute(selectedOperation, firstOperand, secondOperand);


  let isDoingMath = true;
  while (isDoingMath) {
    selectedOperation = await getOperation();
    if (selectedOperation !== FINISH) {
      firstOperand = result;
      secondOperand = await getOperand();
      result = compute(selectedOperation, firstOperand, secondOperand);
    }
    else if (selectedOperation === FINISH) {
      isDoingMath = false;
      console.log(result);
    }


  }




  

    rl.close();
})();
