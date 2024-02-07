// 1. Declare an empty array;
const naturalNumbers =[];

// 2. Declare an array with more than 5 number of elements
const numbers =[1,2,3,4,5,6,7];
// 3.Find the length of your array
console.log(numbers.length)

// 4. Get the first item, the middle item and the last item of the array
let midIndex=Math.floor(numbers.length/2);
console.log(numbers[0]);  //first
console.log(numbers[midIndex]); //middle
console.log(numbers[numbers.length-1]); //last


// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
//The array size should be greater than 5
const mixedDataTypes=[1,"tanuja",true,undefined,null,56.3,"javascript"];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values 
//Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies =["Coditas", "Google", "Microsoft", "Apple", "IBM", "Oracle" , "Amazon"];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log("Number of Companies",itCompanies.length);

// 9. Print the first company, middle and last company
 midIndex=Math.floor(itCompanies.length/2);
console.log(itCompanies[0]); //first
console.log(itCompanies[midIndex]); //second
console.log(itCompanies[itCompanies.length-1]); //last

//10. Print out each company
for(let index=0;index<itCompanies.length;index++)
{
    console.log(itCompanies[index]);
}

// 11.Change each company name to uppercase one by one and print them out
for(let index=0;index<itCompanies.length;index++)
{
    console.log(itCompanies[index].toUpperCase());
}

// 12.Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence ='';
for(let index=0;index<itCompanies.length-1;index++)
{
    if(index!=itCompanies.length-2)
    {
        sentence+=itCompanies[index];
        sentence+=", ";
    }
    else{
        sentence+=itCompanies[index];
        sentence+=" and "
    }
}
sentence+=itCompanies[itCompanies.length-1];
sentence+=" are big IT companies";
console.log(sentence);

// 13.Check if a certain company exists in the itCompanies array. 
//If it exist return the company else return a company is not found

if(itCompanies.includes("Coditas"))
{
      const index = itCompanies.indexOf("Coditas");
      console.log(itCompanies[index]);
}

// 14.Filter out companies which have more than one 'o' without the filter method
const filteredCompanies =[];
for(let index=0;index<itCompanies.length;index++)
{
    const countOfOs = itCompanies[index].split('o').length-1;
    if(countOfOs > 1)
    {
         filteredCompanies.push(itCompanies[index]);
    }
}
console.log(filteredCompanies);

// 15. Sort the array using sort() method
console.log(itCompanies.sort());

// 16. Sort the array by country name length without sort;

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
for(let index=0;index<countries.length-1;index++)
{
    let minimumLengthIndex =index;
    for(let minIndex =index+1;minIndex<countries.length;minIndex++)
    {
        if(countries[minIndex].length < countries[minimumLengthIndex].length)
             minimumLengthIndex=minIndex;
    }
    let temp = countries[index];
    countries[index]=countries[minimumLengthIndex];
    countries[minimumLengthIndex]=temp;

}
console.log(countries);
// 17.Reverse the array using reverse() method
console.log(countries.reverse());

// 18. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,4));

// 19.Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 20. Slice out the middle IT company or companies from the array
console.log(itCompanies);
const lengthOfItCompanies = itCompanies.length;
mid = Math.floor(lengthOfItCompanies / 2);
if( lengthOfItCompanies % 2)
{
    console.log(itCompanies.slice(mid,mid+1));
}
else
{
    console.log(itCompanies.slice(mid-1,mid+1));
}

// 21. Remove the first IT company from the array
itCompanies.shift();

// 22. Remove the middle IT company or companies from the array
console.log(itCompanies);
mid = Math.floor(itCompanies.length / 2);
if( itCompanies.length % 2)
{
    console.log(itCompanies.splice(mid,1));
}
else
{
    console.log(itCompanies.splice(mid-1,2));
}

console.log(itCompanies);

// 23. Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.length-1,1));
console.log(itCompanies)

//Remove all IT companies
console.log(itCompanies.splice(0,itCompanies.length));

// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
let word='';
let words=[]
for(let index = 0;index<text.length;index++)
{
   if(text[index]!==',' && text[index]!==' ' && text[index]!=='.')
   {
       word+=text[index];
       if(index === text.length - 1)
       {
             words.push(word);
       }
   }
   else{
    if(word)
       words.push(word);
     word ='';
   }
}
console.log(words);
console.log(words.length); //14

/*25. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
add Gulabjamun at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Rasmalai');
if(!shoppingCart.includes('Gulabjamun'))
    shoppingCart.push('Gulabjamun');

isallergic = true;
if(isallergic)
{
    const indexOfHoney =shoppingCart.indexOf('Honey');
    shoppingCart.splice(indexOfHoney,1);
    console.log(shoppingCart)
}

const indexOfTea =shoppingCart.indexOf('Tea');
shoppingCart.splice(indexOfTea,1,"Green Tea");
console.log(shoppingCart);

//26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. 
//If it does not exist add to the countries list.
if(countries.includes('India'))
{
    console.log("INDIA");
}
else
{
    countries.push('India');
}


// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
//If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
if(webTechs.includes("Sass"))
{
    console.log("Sass is a CSS preprocess");
}
else{
    webTechs.push("Sass");
    console.log(webTechs);
}
// 28. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
/*29. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a,b) =>{
    return a-b;
})
console.log(ages[0]) //minimum age;
console.log(ages[ages.length-1]) // maximum age


const lengthOfItAges = ages.length;
mid = Math.floor(lengthOfItAges / 2);
if( lengthOfItAges % 2)
{
    console.log(ages[mid]);
}
else
{
    console.log((ages[mid]+ages[mid-1])/2);
}

let sumOfAges = 0;
for(let index =0;index<ages.length;index++)
{
    sumOfAges+=ages[index];
}
const averageAge = sumOfAges/ages.length;
console.log(averageAge);
maxAge = ages[ages.length-1]
minAge = ages[0];
const rangeofAges = maxAge-minAge;
console.log(rangeofAges);

if(Math.abs(minAge-averageAge)>Math.abs(maxAge-averageAge))
{
    console.log("maximum age is more close to average");
}
else{
    console.log("minimum age is more close to average")
}

console.log(countries.slice(0,11));


// 30. Find the middle countries in the countries array.

let lengthOfCountries = countries.length;
console.log(lengthOfCountries);
mid = Math.floor(lengthOfCountries / 2);
if( lengthOfCountries % 2)
{
    console.log(countries.slice(mid,mid+1));
}
else
{
    console.log(countries.slice(mid-1,mid+1));
}

//1. Divide the countries array into two equal arrays if it is even.
// If countries array is not even , one more country for the first half
console.log(countries);
lengthOfCountries = countries.length;
console.log(lengthOfCountries);
let partOne =[];
let partTwo=[];
mid = Math.floor(lengthOfCountries / 2);
if( lengthOfCountries % 2)
{
    partOne=countries.slice(0,mid-1);
    partOne.push('SriLanka')
    partTwo=countries.slice(mid);

}
else
{
    partOne=countries.slice(0,mid-1);
    partTwo=countries.slice(mid);
}
console.log(partOne);
console.log(partTwo);