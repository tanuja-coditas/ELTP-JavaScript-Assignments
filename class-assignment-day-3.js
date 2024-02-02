//strings
const singleQuoteString = 'My name is "tanuja" ';
const doubleQuoteString = "My name is 'tanuja' ";

console.log(singleQuoteString);
console.log(doubleQuoteString);

//null
const nullVar=null;  // avoid using null;
console.log(typeof(nullVar)); // Object

//Arrays
const numbers=[1,2,3,4]
console.log(typeof(numbers));  // Object

const person=[
    "tanuja",
    22,
    false,
    undefined,
    null,
    { hobbie:"dancing"},
    [23,12,32],
    function greet()
    {
        console.log("hii");
    }
];

console.log(person);

console.log(0/0);
const notANumber=NaN // special value
console.log(typeof(notANumber)); //Number

function greet()
{
    console.log("hello")
}

console.log(typeof greet)

console.log(typeof(string));
console.log(typeof string);
