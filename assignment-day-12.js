// DAY -15 ASSIGNMENT  (LOOPS)
// NOTE: You guys can use (for, for of, for in, while, do while loop), whichever you feel is best.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]


 
// Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let number=0;number<=10;number++)
{
    console.log(number);
}
let number =0
while(number<=10)
{
    console.log(number);
    number++;
}

number = 0;
do{
    console.log(number);
    number++;
}while(number<=10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let number=10;number>=0;number--)
{
    console.log(number);
}
number =10;
while(number>=0)
{
    console.log(number);
    number--;
}

number = 10;
do{
    console.log(number);
    number--;
}while(number>=0);

// Iterate 0 to n using for loop
const n=3;
for(let index =0;index<=n;index++)
{
     console.log(index);
}
// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

for(let row=1;row<=7;row++)
{
    console.log('#'.repeat(row));
}
// 5. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

console.log("i", "i^2" , "i^3")
for(let number = 0;number <= 10;number++)
{
    console.log(number , number**2 , number**3);
}
// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let number =0;number<=100;number++)
{
    if(!number%2)
        console.log(number);
}
// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let number =0;number<=100;number++)
{
    if(number%2)
        console.log(number);
}


// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let number = 2; number <= 100; number++) {
    let isPrime = true;

    for (let factor = 2; factor <= Math.sqrt(number); factor++) {
        if (factor !==number && number % factor === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(number);
    }
}


// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNumbers = 0;
for(let number =0;number<=100;number++)
{
    sumOfNumbers+=number;
}
console.log(sumOfNumbers);

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumOfEvens = 0;
let sumOfOdds = 0;
for(let number =0;number<=100;number++)
{
    if(number%2)
        sumOfOdds+=number;
    else
        sumOfEvens+=number;
}

console.log(sumOfEvens);
console.log(sumOfOdds);

// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]

console.log(`[${sumOfEvens},${sumOfOdds}]`)

// 11. Develop a small script which generate array of 5 random numbers
const numbers=[];
for(let iteration = 0;iteration< 5;iteration++)
{
    numbers.push(Math.floor(Math.random()*10));
}
console.log(numbers);

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
const ages=[];
while(ages.length<5)
{
   const number=Math.floor(Math.random()*100);
   if(!ages.includes(number))
    ages.push(number);
}
console.log(ages);


// 13. Develop a small script which generate a six characters random id: //iuyt56
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let iteration = 0; iteration< 6; iteration++) {
        randomId += characters[Math.floor(Math.random() * characters.length)];
}
console.log(randomId);

// 14. Develop a small script which generate any number of characters random id.
 randomId = '';
 const numberOfCharacters =Math.floor(Math.random()*10);
for (let iteration = 0; iteration< numberOfCharacters; iteration++) {
        randomId += characters[Math.floor(Math.random() * characters.length)];
}
console.log(randomId);

// 15. Write a script which generates a random hexadecimal number.
const hexadecimalDigits =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexadecimalNumber ='';
const lengthOfNumber =Math.floor(Math.random()*10);
for (let iteration = 0; iteration< lengthOfNumber; iteration++) {
        
        hexadecimalNumber += hexadecimalDigits[Math.floor(Math.random() * 16)];
}
console.log(hexadecimalNumber);

// 16. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const newCountries =[];
for(country of countries)
{
    newCountries.push(country.toUpperCase());
}
console.log(newCountries);


// 17. Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const countriesLength=[];
for(country of countries)
{
    countriesLength.push(country.length);
}
console.log(countriesLength);
// 18. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const countryCodes=[]
for(country of countries)
{
    countryCodes.push([country,country.slice(0,3).toUpperCase(),country.length]);
}
console.log(countryCodes);


// 19. In above countries array, check if there is a country or countries containing the word 'land'.
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
const countriesWithLand =[];
for(country of countries)
{
    if(country.includes('land'))
        countriesWithLand.push(country)
}
if(countriesWithLand.length)
{
    console.log(countriesWithLand);
}
else
{
    console.log('All these countries are without land');
}


// 20. Using the above countries array, find the country containing the biggest number of characters.
let countryWithMaxCharacters='';
let maxLength = -1;
for(country of countries)
{
    if(maxLength<country.length)
    {
        countryWithMaxCharacters = country;
        maxLength=country.length;
    }
        
}
console.log(countryWithMaxCharacters);

// 21. Using the above countries array, find the country containing only 5 characters.
for(country of countries)
{
    if(country.length === 5)
        console.log(country);
}

// 22. Find the longest word in the webTechs array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
let longestLength =-1;
let longestTech ='';
for(tech of webTechs)
{
    if(tech.length > longestLength)
    {
        longestLength =tech.length;
        longestTech = tech;
    }
}
console.log(longestTech);


// 23. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
const techCodes =[];
for(tech of webTechs)
{
    techCodes.push([tech,tech.length]);
}
console.log(techCodes);


// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. 
//Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym='';
for(technology of mernStack)
{
     acronym+=technology[0];
}
console.log(acronym);


// 25. Iterate through the array, 
//["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const technologies =["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(technology of technologies)
{
    console.log(technology);
}
// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits =  ['banana', 'orange', 'mango', 'lemon'];
const newFruits =[];
for(fruit of fruits)
{
    newFruits.unshift(fruit);
}
console.log(newFruits);

// 27. Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(tech of fullStack.flat())
{
    console.log(tech);
}
// OUTPUT: 

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB





