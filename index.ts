#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const currency : any = {
    USD : 1,
    PKR : 277.30,
    EUR : 1.07,
    GBP : 1.25,
    INR : 0.012,
    SAR : 0.27,
    JPY : 0.0065,
    CAD : 0.73,
    BHD : 2.66,
    AED : 0.27,
}
let useranswer = await inquirer.prompt ([
    {
        name : "from",
        message : "Enter Currency From",
        type : "list",
        Choice : ["USD","PKR","EUR","GBP","INR","SAR","JPY","CAD","BHD","AED",]
    },
    {
        name : "to",
        message : "Enter Currency to",
        type : "list",
        Choice : ["USD","PKR","EUR","GBP","INR","SAR","JPY","CAD","BHD","AED",]  
    },
    {
        name : "amount",
        message : "Enter Your Amount",
        type : "number",
    },
]);

let currencyfrom = currency [useranswer.from];
let currencyto = currency [useranswer.to];
let inputamount = useranswer.amount;
let convert = inputamount / currencyfrom;
let total = convert * currencyto;    

console.log(total);



// console.log (chalk.bold.bgYellowBright, answer.from)
// console.log(chalk.bold.bgBlue,answer.to)