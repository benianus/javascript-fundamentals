const name = require("fs").readFileSync(0, "utf-8").trim();
// Print the two lines below.
let balance = name[0];
let deposit = balance + name[1];
console.log(deposit)
let withdrawal = balance - name[2];
console.log(withdrawal)
let fee = balance - name[3];
console.log(fee)

