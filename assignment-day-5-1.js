//1.Declare a variable and assign a value 'Easy JavaScript Assignments'.
const message = "Easy JavaScript Assignments"

// 2. Print the length of the string.
console.log(message.length)


// 3. Change all the string characters to capital letters using toUpperCase() method
console.log(message.toUpperCase());

// 4. Change all the string characters to lowercase letters using toLowerCase() method
console.log(message.toLowerCase());

// 5. Slice out the first word of the string using substr() and substring() method
console.log(message.substr(0,1));
console.log(message.substring(0,1));

// 6. Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(message.slice(5));

// 7. if the string contains a word Script using includes() method
console.log(message.includes('Script'));

// 8. Split the string into an array using split() method
const messageLetters =message.split('');
console.log(messageLetters);
// 9. Split the string 'Easy JavaScript Assignments' at the space using split() method
const messageWords=message.split(' ');
console.log(messageWords);

// 10. 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
let sentence = 'ELTP, BATCH, THREE';
const sentenceWords=sentence.split(',');
console.log(sentenceWords);


// 11. Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(message.replace('JavaScript','Python'));


// 12. What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
message.repeat('Python','JavaScript');
console.log(message.charAt(20));


// 13. What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(message.charCodeAt(message.indexOf('J')));


// 14. Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
 console.log(message.indexOf('a')); //1


// 15. Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(message.lastIndexOf('a'));


// 16. Use indexOf to find the position of the first occurrence of the word 'Easy' 
//     in the following sentence:'Easy JavaScript Assignments, Easy Easy'
sentence = 'Easy JavaScript Assignments, Easy Easy';
console.log(sentence.indexOf('Easy'));


// 17. Use lastIndexOf to find the position of the last occurrence of the word 'Easy' 
//in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(sentence.lastIndexOf('Easy')); //34


// 18. Use search to find the position of the first occurrence of the word 'Easy' 
// in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(sentence.search('Easy'));


// 19. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// '       Easy JavaScript Assignments, Easy Easy             '
sentence = '       Easy JavaScript Assignments, Easy Easy             ';
console.log(sentence.trim());


// 20. Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
sentence = 'Easy JavaScript Assignments';
console.log(sentence.startsWith('E'));

// 21. Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(sentence.endsWith('s'));

// 22. Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(sentence.match(/a/g));

// 23. Use concat() and merge 'Easy' and 'JavaScript' to a single string.
let word1 = 'Easy'
let word2 = 'JavaScript'
console.log(word1.concat(word2));


// 24. Use repeat() method to print 'Easy JavaScript' 3 times.
sentence = 'Easy JavaScript'
console.log(sentence.repeat(3));


// 25. 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
sentence='Javascript is Easy, too Easy, too Easy, Easy to learn'
let words = sentence.split(' ');
let count = 0;
for( let word in words)
{
    if(word.includes('Easy'))
        count++;
}
console.log(count);

// 26. Use match() to count the number of all 'Easy' in the following sentence:
// 'Javascript is Easy, too Easy, too Easy, Easy to learn'
sentence='Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log((sentence.match(/Easy/g)).length)


//28. Calculate the total annual income of the person by extracting the numbers from the following text.
// 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, 
//and 50000 euro from trading'*/
 sentence = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing,and 50000 euro from trading';
  words = sentence.split(' ');
 ;
 let totalIncome =0;
 for(let word in words)
 {
    
     if(!isNaN(words[word]))
     {
        totalIncome+=parseInt(words[word]);
     }
 }
 console.log(totalIncome);