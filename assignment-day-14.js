

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Explain the difference between forEach, map, filter, and reduce.

const oddNumbers = numbers.filter(number => number%2);
console.log(oddNumbers);

const squaredNumbers = numbers.map(number => number**2);
console.log(squaredNumbers);

const sumOfNumbers = numbers.reduce((accumulator,number) => accumulator+number);
console.log(sumOfNumbers);

// Define a callback function before you use it in forEach, map, filter or reduce.
const callbackFunction = (number) => !(number%2);
const evenNumbers = numbers.filter(callbackFunction);
console.log(evenNumbers);

// Use forEach to console.log each country in the countries array.
let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach( country => {
    console.log(country);
})

// Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach( name => {
    console.log(name);
})

// Use forEach to console.log each number in the numbers array.
numbers.forEach( number => {
    console.log(number);
})


// Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map( country => country.toUpperCase());
console.group(newCountries);

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map( country => country.length);
console.log(countriesLength);

// Use map to create a new array by changing each number to square in the numbers array
const squareOfNumbers = numbers.map(number => number**2);
console.log(squareOfNumbers);

// Use map to change to each name to uppercase in the names array
const newNames = names.map( name => name.toUpperCase());
console.log(newNames);

// Use map to map the products array to its corresponding prices.
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

const prices = products.map( product => product.price);
console.log(prices);

// Use filter to filter out countries containing land.
const countriesWithLand = countries.filter( country => country.toLowerCase().includes('land'));
console.log(countriesWithLand);

// Use filter to filter out countries having six character.
const countriesWithSixChar = countries.filter ( country => country.length === 6);
console.log(countriesWithSixChar);

// Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixCharAndMore = countries.filter ( country => country.length >= 6);
console.log(countriesWithSixCharAndMore);

// Use filter to filter out country start with 'E';
const countriesStartsWithE = countries.filter( country => country.startsWith('E'));
console.log(countriesStartsWithE);


// Use filter to filter out only prices with values.
const realPrices = products.filter( product => parseInt(product.price));
console.log(realPrices);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const colors = ["red",4.2,"blue",24,"yellow"];
const getStringLists = (array) => {
    const stringsList =[];
    for( element of array )
    {
        if(!parseInt(element))
            stringsList.push(element);
    }
    return stringsList;
}

console.log(getStringLists(colors));


// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((accumulator,number) => accumulator+number);
console.log(sum);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let sentence = countries.reduce((accumulator, country) => accumulator+country+', ','Estonia,');
sentence+='are north European countries';
console.log(sentence);

// Explain the difference between some and every
const areAllOdd = numbers.every( number => number%2 );
console.log(areAllOdd);

const areSomeOdd = numbers.some( number => number%2);
console.log(areSomeOdd);

// Use some to check if some names' length greater than seven in names array
const areSomeNameLarge = names.some( name => name.length > 7);
console.log(areSomeNameLarge);

// Use every to check if all the countries contain the word land
const isEveryCountryhasLand = countries.every( country => country.toLowerCase().includes('land'));
console.log(isEveryCountryhasLand);

// Explain the difference between find and findIndex.
const found = numbers.find( number => !(number%2));
console.log(found);

const index = numbers.findIndex( number => !(number%2));
console.log(index);

// Use find to find the first country containing only six letters in the countries array
const countryWithSixChar = countries.find ( country => country.length === 6);
console.log(countryWithSixChar);

// Use findIndex to find the position of the first country containing only six letters in the countries array
const countryIndex = countries.findIndex( country => country.length === 6);
console.log(countryIndex);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const indexOfNorway = countries.findIndex( country => country === 'Norway');
console.log(indexOfNorway);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const indexOfRussia = countries.findIndex( country => country === 'Russia');
console.log(indexOfRussia);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice =products.filter(product => parseInt(product.price)).reduce((accumulator,product) => accumulator+product.price,0);
console.log(totalPrice);

// Find the sum of price of products using only reduce reduce(callback))
const sumOfPrice = products.reduce((accumulator,product) => parseInt(product.price)?accumulator+product.price:accumulator,0);
console.log(sumOfPrice);

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern
//(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')). 
countries =  require("./countries.js");

const categorizeCountries = (countries)  => 
{
    const result =[];
    for(country of countries)
    {
        if(country.name.includes('stan'))
           result.push(country);
    }
    return result;
};
console.log(categorizeCountries(countries));

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
const countLetterFreq = (countries) => 
{
    const freqCount ={}
    for(country of countries)
    {
        const name=country.name.toLowerCase();
        if(freqCount[name[0]])
        {
            
            freqCount[name[0]]++;
        }
        else
        {
            freqCount[name[0]] = 1;
        }
    }

    return freqCount
}
console.log(countLetterFreq(countries));

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const getFirstTenCountries =(countries) =>
{
    const result =[];
    let count = 0;
    for(country of countries)
    {
        if(count >= 10)
          break;
        result.push(country);
        count++;
    
    }
    return result;
}
console.log(getFirstTenCountries(countries));

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
const getLastTenCountries=(countries) =>
{
    const result =[];
    
    for(let index =countries.length-1 ; index >=countries.length-10;index--)
    {
        
        result.push(countries[index]);
        
    }
    return result;
}
console.log(getLastTenCountries(countries));

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

const freqCount = countLetterFreq(countries)
let maxFreq = -1,letter=''
for(const [key,value] of Object.entries(freqCount))
{
    if(value>maxFreq)
    {
        maxFreq = value;
        letter = key;
    }
}

console.log(letter);

// Use the countries information, in the data folder. Sort countries by name, by capital, by population


// Sort countries by name
const countriesByName = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
console.log(countriesByName);

// Sort countries by capital
const countriesByCapital = countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));
console.log(countriesByCapital);

// Sort countries by population
const countriesByPopulation = countries.slice().sort((a, b) => b.population - a.population);
console.log(countriesByPopulation);


//  Find the 10 most spoken languages:

const mostSpokenLanguages = (countries,count) => 
{
    const languagesFreq = {};
    for(const country of countries)
    {
        const newLanguages=country.languages;
        for( language of newLanguages)
        {
            if(languagesFreq[language.toLowerCase()])
                languagesFreq[language.toLowerCase()]++;
            else
                languagesFreq[language.toLowerCase()]=1;
        }
    }
    const sortedLanguages = Object.entries(languagesFreq)
        .sort((a, b) => b[1] - a[1]);

    // Step 4: Slice the sorted array to get the top count languages
    const topLanguages = sortedLanguages.slice(0, count);

    // Format the output as requested
    const result = topLanguages.map(([language, count]) => ({ language, count }));
    return result;
}
// // Your output should look like this
 console.log(mostSpokenLanguages(countries, 10))
// [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// Your output should look like this
 console.log(mostSpokenLanguages(countries, 3))
// [
// {country: 'English',count: 91},
// {country: 'French',count: 45},
// {country: 'Arabic',count: 25},
// ]```

