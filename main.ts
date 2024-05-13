#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; //Dollars
let myPin = 1235;

let pinAnswer = await inquirer.prompt(
    [
    {
       name: "pin",
       message: "enter your pin",
       type: "number"
}
]
);
if (pinAnswer.pin === myPin){
    console.log("Correct Pin Code!")
};

let operationAns = await inquirer.prompt(
    [
        {
           name: "operation",
           message: "Please select option",
           type: "list",
           choices: ["Withdraw", "Deposit", "check balance"]
}
]
);
console.log(operationAns);

if (operationAns.operation === "Withdraw") {

let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number"


    }
]
);
if (amountAns.amount > myBalance){
    console.log("insufficient balance")
}

//=, -=, +=
else {myBalance -= amountAns.amount;

console.log("Your remaining balance is:" + myBalance);
}
} else if (operationAns.operation === "check balance"){
    console.log("your balance is: " + myBalance)
}
if (operationAns.operation === "Deposit") {
    
    let depositAmount = await inquirer.prompt(
        [
            {
              name: "amount",
              message: "enter Deposit amount",
              type: "number"
                  
            },
    
]
)
console.log(`Deposit amount: ${depositAmount.amount}`)
console.log(`Total Balance: ${myBalance + depositAmount.amount}`)
};






