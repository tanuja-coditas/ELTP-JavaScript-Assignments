const constants = [2.72, 3.14, 9.81, 37, 100]

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);


//Destructure and assign the elements of countries array to fin, est, sw, den, nor

const [fin, est, sw, den, nor] = countries;

//Destructure the rectangle object by its properties or keys.
  
  const  {width} = rectangle, { height} = rectangle, {area} = rectangle, {perimeter} = rectangle;
 
  
//Iterate through the users array and get all the keys of the object using destructuring
for(const user of users)
{
    const {name} = user, {scores} = user, {skills} =user, { age} = user;
    console.log(`name:${name}, scores:${scores}, skills:${skills}, age :${age}`);
    
}
//Find the persons who have less than two skills
const personWithLessThanTWoSkills =[];
for(const user of users)
{
    const {name} = user, {skills} =user;
    if(skills.length < 2)
    {
        personWithLessThanTWoSkills.push(name);
    }
}
console.log(personWithLessThanTWoSkills);


//Destructure the countries array print name, capital, population and languages of all countries
let student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, score] = student;
const [,,jsScore,reactScore] = score;
console.log(name, skills, jsScore, reactScore);

//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
  ]

function convertArrayToObject(students)
{
    const newStudents=[]
    for(const student of students)
    {
        console.log(student);
        const [name,skills,scores] = student;
        const studentsInfo ={};
        studentsInfo.name =name;
        studentsInfo.skills = skills;
        studentsInfo.scores =scores;
        newStudents.push(studentsInfo);
       

    }
    return newStudents;
}

console.log(convertArrayToObject(students));

//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
 student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

const newStudent=JSON.parse(JSON.stringify(student));

//Add Bootstrap with level 8 to the front end skill sets
const {skills :{frontEnd}} = newStudent;
frontEnd.push({skill:"Bootstrap",level : 8});

//Add Express with level 9 to the back end skill sets
const {skills :{backEnd}} = newStudent;
backEnd.push({skill : "Express", level : 9});

//Add SQL with level 8 to the data base skill sets
const {skills :{dataBase}} = newStudent;
backEnd.push({skill : "SQL", level : 8});

//Add SQL without level to the data science skill sets
const{skills :{dataScience}} = newStudent;
dataScience.push('SQL');

console.log(newStudent);




