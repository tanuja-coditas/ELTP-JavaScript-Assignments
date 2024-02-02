let rollNo = "123"
let rollNo2 = +(rollNo) ;
console.log(rollNo2);
console.log(typeof(rollNo2));

const name='tanuja';
const greet = 'hello';

console.log(`${greet}, ${name}`);

const message = "hello";
console.log(message[2]);
console.log(message.charAt(2));
console.log(message.charCodeAt(0)); //Ascii

message[0]='B';
console.log(message); //strings are immutable;

let firstName =  "tanuja";
console.log(firstName.length);
console.log(firstName.split(''));
console.log(firstName.split('a'));
console.log(firstName.toLocaleLowerCase());

let subject = "javascript"
console.log(subject.substr(4,6));
console.log(subject.substring(4,6));

console.log(subject.slice(1));
console.log(subject.slice(2,7));
console.log(subject.slice(1,7,2));
//console.log(subject.slice(-1,4));

console.log(subject.indexOf('y'));
console.log(subject.lastIndexOf('a'));
console.log(subject.indexOf('sdr')); //trim(),includes()






