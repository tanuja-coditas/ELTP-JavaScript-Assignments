// Check if type of '70' is equal to 70
console.log('70' === 70) //false

//Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8') === 9) //false

//Boolean value is either true or false.

//Write five JavaScript statement which provide falsy value.
const name=''
let age; //undefined
const isLoggedIn=false;
const count = 0;
const salary = null;

// Write five JavaScript statement which provide truthy  value.
const firsName="tanuja";
const marks = 234;
const isMarried=true;
const isSignedIn = 1
const hobbies=[];

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 5 > 4
console.log(5>4) //true
//4 >= 3 //true
console.log(4>=3)
//4 < 3 //false
console.log(4 < 3)
//4 <= 3 //false
console.log(4 <= 3)
//5 == 5 //true
console.log(5 == 5)
//9 === 9 //true
console.log(9 === 9)
// 9 == '9' //true
console.log(9 == '9')
// 8 === '8' //false
console.log(8 === '8')
//4 != 4 //false
console.log(4 != 4)
// 4 !== 4 //false
console.log(4 !== 4)
// 4 != '4' //false
console.log(4 != '4')
//4 != '4' //false
console.log(4 != '4')
//4 !== '4' //true
console.log(4 !== '4')
//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length) //false
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) // true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
// There is no 'on' in both dragon and python
console.log('dragon'.includes('on')&&'python'.includes('on')) //true

