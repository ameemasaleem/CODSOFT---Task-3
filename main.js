#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000; //Dollars
let myPin = 1235;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!");
}
;
let operationAns = await inquirer_1.default.prompt([
    {
        name: "operation",
        message: "Please select option",
        type: "list",
        choices: ["Withdraw", "Deposit", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("insufficient balance");
    }
    //=, -=, +=
    else {
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance);
    }
}
else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
}
if (operationAns.operation === "Deposit") {
    let depositAmount = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "enter Deposit amount",
            type: "number"
        },
    ]);
    console.log(`Deposit amount: ${depositAmount.amount}`);
    console.log(`Total Balance: ${myBalance + depositAmount.amount}`);
}
;
