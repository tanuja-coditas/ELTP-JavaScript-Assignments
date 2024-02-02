// 2. Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

const integerNum = 12;
console.log(typeof(integerNum)); //Number

const floatNum = 23.1;
console.log(typeof(floatNum)); //Number

const firstName = "Tanuja";
console.log(typeof(firstName)); //String
const char = 'a';
console.log(typeof(char));  //String

const isChecked = false
console.log(typeof(isChecked)); //boolean

const undefinedValue = undefined;
const nullValue = null;
console.log(undefinedValue); //undefined
console.log(nullValue); //null

const randomArr=[2,3.45,"tanuja",null];
console.log(typeof(randomArr));  //object

const car={
    speed:23,
    color:'red'
};
console.log(typeof(car));

function greet()
{
    console.log("Hello!");
}

console.log(typeof greet); //function