const name = require("fs").readFileSync(0, "utf-8").trim().split("\n");
// Print the two lines below.
let balance = Number(name[0]);
let deposit = balance + Number(name[1]);
console.log(deposit);
let withdrawal = balance - Number(name[2]);
console.log(withdrawal);
let fee = balance - Number(name[3]);
console.log(fee);
