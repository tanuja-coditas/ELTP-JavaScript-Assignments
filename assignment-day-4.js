//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let rollNo1 = '10';
const rollNo2 = 10;
console.log(typeof(rollNo1)) //string
console.log(typeof(rollNo2)) //number

rollNo1=Number(rollNo1);
console.log(typeof(rollNo1)) //number

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseInt('9.8')) //9
let marks = '9.8'
marks = Number(marks);
console.log(Math.round(marks)) //10


//Generate a random number between 0 and 100 inclusively.
let randomGeneratedNumber = Math.floor(Math.random()*101)
console.log(randomGeneratedNumber);

//Generate a random number between 50 and 100 inclusively.
randomGeneratedNumber = Math.floor(Math.random()*51+50);
console.log(randomGeneratedNumber)

// Use console.log() and escape characters to print the following pattern.
 /*   1 1 1 1 1
      2 1 2 4 8
      3 1 3 9 27
      4 1 4 16 64
      5 1 5 25 125
*/
 for(let counter = 1;counter<=5;counter++)
 {
    console.log(counter+" "+counter**0+" "+counter**1+" "+counter**2+" "+counter**3);
 }
// Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const height = 12;
const base = 5;
const area = 0.5 * base *height;
console.log(area)