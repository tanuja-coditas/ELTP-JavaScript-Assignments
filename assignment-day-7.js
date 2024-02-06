//1. If user is 18 or older , give feedback: 'You are allowed to Marry'
// but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const age = 16;
age >=18 ? console.log("You are allowed to Marry"):console.log(`wait for the ${18-age} years`);

//2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
//Enter your age: 30
//You are 5 years older than me.
const yourAge = 30;
const myAge=yourAge-5;
yourAge > myAge ? console.log("I am older"):console.log("You are older");


// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'.
// Try to implement it in to ways.
myAge > yourAge ? console.log("yourAge is greater than myAge"):console.log("myAge is less than yourAge");

if(myAge>yourAge)
{
    console.log("yourAge is greater than myAge");
}
else{
    console.log("myAge is less than yourAge");
}
// 4. Check, if a number is even or not.
const count = 20
count % 2 ? console.log("Number is odd"):console.log("Number is Even")

/*5. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F*/
const score = 53;
if(score >= 80)
{
    console.log("A");
}
else if(score >=70)
{
    console.log("B")
}
else if(score >= 60)
{
    console.log("C");
}
else if(score >= 50)
{
    console.log("D");
}
else
{
    console.log("F");
}
/*6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Rainy.
December, January or February, the season is Winter.
March, the season is Spring
 April, May, June, July or August, the season is Summer*/

let month ="January";
 if(month === "April" || month === "May" || month === "June" || month === "July" || month === "August")
{
    console.log("Summer");
}
else if(month === "December" || month === "January" || month === "February")
{
    console.log("Winter");
}
else if(month === "September" || month === "October" || month === "November")
{
    console.log("Rainy");
}
else
{
    console.log("Spring");
}
// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
const day = "Friday";
(day === "Sunday" || day === "Saturday") ? console.log("Weekend"):console.log("weekday");
// 8. Write a program which tells the number of days in a month.
month = "February";
if (month ==="January" || month ==="March" || month ==="May" || month ==="July" || month ==="August" || month ==="October" || month ==="December") 
{
    console.log("31");
}
else if(month === "April" || month ==="June" ||month ==="September"||month ==="November")
{
    console.log("30");
}
else
{
    console.log("28/29");
}
// 9. Write a program to check whether the year is leap year or not.
const year =1800;
if(year%100)
{
     if(!(year%4))
     {
        console.log("Leap Year");
     }
     else
     {
        console.log("Not a Leap Year");
     }
}
else
{
    if(!(year%400))
    {
        console.log("Leap Year");
     }
     else
     {
        console.log("Not a Leap Year");
     }

}
/*10. Write a JavaScript ternary expression that checks the following conditions:
If the first condition (condition1) is true, it should check the second condition (condition2). 
If condition2 is true, set the result to 'A', otherwise set it to 'B'.
If the first condition (condition1) is false, it should check another condition (condition3).
If condition3 is true, set the result to 'C', otherwise set it to 'D'.*/
let result ='';
const userAge = 16
const isLoggedIn =false
const isSuspended = true

result = userAge > 18 ?(isLoggedIn?'A':'B'):(isSuspended?'C':'D')
console.log(result);


// 11. What will be the result of the following nested ternary expression:
result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E'; //D
console.log(result);