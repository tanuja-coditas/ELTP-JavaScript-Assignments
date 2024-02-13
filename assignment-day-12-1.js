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











