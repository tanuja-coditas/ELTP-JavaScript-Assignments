let rollNo="123";
let name="tanuja";
let userName="24Tanuja";
console.log(Number(rollNo));
console.log(parseInt(rollNo));

console.log(Number(name));

console.log(Number(userName));
console.log(parseInt(userName));

rollNo="123d";
console.log(Number.isNaN(rollNo));

rollNo=123
console.log(isFinite(rollNo));

rollNo="-435ssdd"
console.log(isFinite(rollNo));

let salary = 1233.455;
console.log(Number.isInteger(salary));

salary=6723469
console.log(Number.isInteger(salary));

salary=salary.toFixed();
console.log(typeof salary);

salary=34.3214
console.log(salary.toFixed(2))


const number1 = 20;
const number2 = 4;

let result=0;

// Addition
result=number1 + number2;
console.log(typeof result);

// subtraction
result=number1 - number2;
console.log(typeof result);

//Multiplication
result=number1 * number2;
console.log(typeof result);

//division
result=number1 / number2;
console.log(typeof result);

//remainder
result=number1 % number2;
console.log(typeof result);

result = 3
result**= 2
console.log(result);


//Math.random
console.log(Math.floor(Math.random(0,10)*10));

//Math.floor
console.log(Math.floor(76.8));

//ceil
console.log(Math.ceil(76.8));

//round()
console.log(Math.round(45.4));

//Math.random
console.log(Math.floor(Math.random(0,1)*10));

let add=10+ "abc";
console.log(add);

add=true + true;
console.log(add);

add= true + "abc"
console.log(add);

console.log(typeof NaN)
console.log(Math.max()) //-Infinity  





