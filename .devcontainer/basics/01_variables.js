const accountId = 123456
let accountEmail = "khushi@123.com"
var password = "67892"
accountCity = "jaipur"
let AccountState ;

// accountId = 2 (not allow)
//accountEmail = "imkhushigoyal@4567" (changeble)
//password = "radharani" (changeble)

//console.log(password);

/* in var there is a issue of a block scope and functional scope */

console.table([accountEmail,accountId,password,accountCity, AccountState])

let x = 5; 
let y = 7;
let z = x+y;
console.log(z); // in let we have block scope

var a= 10;
var b = 20;
var c = a+b;
console.log(c); // in var there is no block scope

const i= 4;
const j= 6;
const k = i+j;
console.log(k); /*in const there no changeble value if we create a variable then 
                  we can't able to change or call that variable again*/ 