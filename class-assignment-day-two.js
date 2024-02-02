
console.log(lastName) //Undefined
const myName="tanuja"; //global scope
console.log(myName);

let age=23; //global scope
age=16 //reassign

var lastName="gadhe" 
function printValues()
{
    console.log(myName);
    myName="akanksha" //Error

    console.log(age) //Error

    var lastName="pund" //Block SCope
    console.log(lastName);

    let age=90;   //Local Scope
    console.log(age)
}

var lastName="pund"
printValues();
console.log(age);
console.log(lastName);