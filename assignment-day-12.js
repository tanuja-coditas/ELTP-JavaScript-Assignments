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





// DAY 15 Assignment (FUNCTIONS)
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle=(length,width) => length * width;
console.log(areaOfRectangle(2,4));


// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason =(month) => {
    const autumn =['july','august','september','october'];
    const winter =['november','december','january','february'];
    const spring =['march'];
    const summer=['april','may','june']

    if(autumn.includes(month.toLowerCase()))
        return "Autumn";
    else if(winter.includes(month.toLowerCase()))
        return "Winter";
    else if(spring.includes(month.toLowerCase()))
        return "Spring";
    else if(summer.includes(month.toLowerCase()))
        return "Summer";
    else
        return "Not a month!!";
}

console.log(checkSeason('June'));


// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (number1,number2,number3) => {
    if(number1 > number2 && number1 > number3)
        return number1;
    else if(number2 > number1 && number2 > number3)
        return number2;
    else
        return number3;
}
 console.log(findMax(0, 10, 5))
// 10
console.log(findMax(0, -10, -2))
// 0
// 4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (number1,number2) => {
   const temp = number1;
   number1 = number2;
   number2 = temp;
   console.log(number1,number2);
}
swapValues(10,23);

// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColors = (color, number) =>{
    if(color === 'hexa')
    {
        const hexadecimalDigits =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        const hexColors =[];
        for(let iteration = 0; iteration< number; iteration++)
        {
            let hexColor ='#';
       
        for (let index = 0; index< 6; index++) {
        
            hexColor += hexadecimalDigits[Math.floor(Math.random() * 16)];
        }
        hexColors.push(hexColor);
    }
           return hexColors;
    }
    else{
        const rgbColors=[];
        for(let iteration = 0; iteration< number; iteration++)
        {
            let rgbColor ='rgb(';
        for (let index = 0; index< 2; index++) {
        
            rgbColor += (Math.floor(Math.random() * 256)).toString();
            rgbColor+=',';
        }
            rgbColor += (Math.floor(Math.random() * 256)).toString();
            rgbColor+=')'
            rgbColors.push(rgbColor);
        }
        return rgbColors
    }
}
 console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
 console.log(generateColors('hexa', 1)) // '#b334ef'
 console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
 console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'


// 6. Write a function called modifyArray takes array as parameter and modifies
// the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
const modifyArray = (fruits) =>{
    if(fruits.length <5)
       return 'item not found';
    else
    {
        fruits[4]=fruits[4].toUpperCase();
        return fruits;
    }
}
 console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']


// 7. Write a functions which checks if all items are unique in the array.
const isunique = (numbers) =>{
    const newNumbers=[];
    for(number of numbers)
    {
        if(newNumbers.includes(number))
            return false;
        else
            newNumbers.push(number);
    }
    return true;
}
console.log(isunique([2,3,4]));
// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
const sevenRandomNumbers = () => {
    const numbers =[];
    while(numbers.length<7)
    {
        const number = Math.floor(Math.random()*10)
        if(!numbers.includes(number))
            numbers.push(number);
    }
    return numbers;
}
console.log(sevenRandomNumbers());











