const readline = require('readline/promises');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

(async () => {
 

let theuserinput = await rl.question("What operation?");
if (theuserinput=== "divide") {
    
    let int1 = await rl.question("Input First Number");
    let int2 = await rl.question("Input Second Number");
    let Cint1 = parseFloat(int1);
    let Cint2 = parseFloat(int2);

    let theanwser = Cint1 / Cint2;
    console.log(theanwser);
    
  } else if (theuserinput=== "multiply") {
    let int1 = await rl.question("Input First Number");
    let int2 = await rl.question("Input Second Number");

    let Cint1 = parseFloat(int1);
    let Cint2 = parseFloat(int2);

    let theanwser2 = Cint1 * Cint2;
    console.log(theanwser2);

  } else if (theuserinput=== "add") {
    let int1 = await rl.question("Input First Number");
    let int2 = await rl.question("Input Second Number");

    let Cint1 = parseFloat(int1);
    let Cint2 = parseFloat(int2);


    let theanwser3 = Cint1 + Cint2;
    console.log(theanwser3);

  } else if (theuserinput==="subtract") {

    let int1 = await rl.question("Input First Number");
    let int2 = await rl.question("Input Second Number");

    let Cint1 = parseFloat(int1);
    let Cint2 = parseFloat(int2);

    let theanwser4 = Cint1 - Cint2;

    console.log(theanwser4);


  } else {

    console.log("Invalid Input");

  }


console.log(theuserinput);


    rl.close();
  })();