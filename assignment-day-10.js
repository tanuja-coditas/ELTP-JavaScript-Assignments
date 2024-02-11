// 1.Create an empty object called cow
const cow={};
//2. Add name, legs, color, age and sound properties for the cow object. 
//The sound property is a method which return "maaah maaah"
cow.name="leela";
cow.legs = 4;
cow.color = "white";
cow.age = 12;
cow.sound =() =>{
    return "maaah maaah";
}
// 3. Print the the cow object on the console
console.log(cow);
// 4. Get name, legs, color, age and sound value from the cow object
const {name}=cow;
const {legs}=cow;
const {color}=cow;
const {age} = cow;
const {sound}= cow;
console.log(sound());
//Set new properties the cow object: breed, getCowInfo()
cow.breed = "indian";
cow.getCowInfo = ()=>{
    return cow.name;
}
const {getCowInfo}=cow;
console.log(getCowInfo());


// 5. Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

   let personWithMaxSkills ='';
   let maxSkillsCount = -1;
  for(const [key,value] of Object.entries(users))
  {
      const {skills}=value;
      if(skills.length >maxSkillsCount)
      {
         maxSkillsCount = skills.length;
         personWithMaxSkills = key
      }
  }
  console.log(personWithMaxSkills);


//Count logged in users, count users having greater than equal to 30 points from the following object.
const loggedInUsers =[];
for(const [key,value] of Object.entries(users))
  {
      const {isLoggedIn}=value;
      if(isLoggedIn)
      {
        loggedInUsers.push(key);
      }
  }

console.log(loggedInUsers);


//Find people who are MERN stack developer from the users object
const mernStackDevelopers =[];
for(const [key,value] of Object.entries(users))
{
    const {skills}=value;
    if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node'))
    {
       mernStackDevelopers.push(key);
    }
}

console.log(mernStackDevelopers);

//Set your name in the users object without modifying the original users object
users.Tanuja = {
    email: 'tanuja@gadhe.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 22,
    isLoggedIn: false,
    points: 30
}
//Get all keys or properties of users object
console.log(Object.keys(users));

//Get all the values of users object
console.log(Object.values(users));

//Use the countries object to print a country name, capital, populations and languages.
const countries ={
  India :{
    capital : "Delhi",
    population : 82634462,
    languages : ['Hindi','Marathi']
  },
  USA: {
    name: "United States of America",
    capital: "Washington D.C.",
    population: 331002651,
    languages: ["English"]
},
China: {
    name: "China",
    capital: "Beijing",
    population: 1439323776,
    languages: ["Mandarin"]
}
}

for(const [key,value] of Object.entries(countries))
{
   const {capital} = value, {population} = value,{languages} = value;
   console.log(`country name:${key}, capital:${capital}, population:${population} and languages:${languages}`);
}


//Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
//totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and
// its description and expenses is a set of incomes and its description.
const personAccount ={
  firsName : "tanuja",
  lastName : "gadhe",
  incomes:{
        salary : 5000,
        freelanceWork : 1000
  },
  expenses :{
      rent : 1500,
      groceries : 500
  },
  totalIncome : function()
  {
     const {incomes} =personAccount;
     let sumOfAllIncomes = 0;
     for( const income of Object.values(incomes))
     {
        sumOfAllIncomes+=income;
     }
     return sumOfAllIncomes;
  },
  totalExpense : function()
  {
    const {expenses} =personAccount;
    let sumOfAllExpenses = 0;
    for( const expense of Object.values(expenses))
    {
      sumOfAllExpenses+=expense;
    }
    return sumOfAllExpenses;
  },
  addIncome : function(description,income)
  {
    const {incomes} =personAccount;
    incomes[description]=income;
  },
  addExpense : function(description,expense)
  {
    const {expenses} =personAccount;
    expenses[description]=expense;
  },
  accountBalance : function()
  {
     return this.totalIncome()-this.totalExpense();
  }
}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
personAccount.addIncome("Bonus",2000);
personAccount.addExpense("Utilities",300);
console.log(personAccount);
console.log(personAccount.accountBalance());


//Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.
function signUp(userName,email)
{
      if(users.hasOwnProperty(userName))
      {
        console.log(`${userName}, you already have an account`);
      }
      else{
          users[userName]={
            email:email
          };
      }
}
signUp("Tanuja","tanuja.gadhe@coditas.com")
console.log(users);

//Create a function called signIn which allows user to sign in to the application
function signIn(userName,userEmail)
{
  if(users.hasOwnProperty(userName))
  {
      const {email} = users[userName];
      if( email === userEmail)
      {
         console.log("Signed up !!");
      }
      else{
        console.log("Email does not match with username");
      }
  }
  else
  {
    console.log("User does not exists")
  }
}
signIn("Tanuja","tanuja.gadhe@coditas.com");


//The products array has three elements and each of them has six properties.
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]
//Create a function called rateProduct which rates the product
function rateProduct(productId,userId,rating)
{
    for(const product of products)
    {
       const {_id} = product;
       if(_id === productId)
       {
          const {ratings} = product;
          ratings.push({userId:userId,rate:rating});
       }
    }
}
rateProduct('aegfal','fg12cy',4.0);
console.log(products);


//Create a function called averageRating which calculate the average rating of a product
function averageRating(productId)
{
  for(const product of products)
    {
       const {_id} = product;
       if(_id === productId)
       {
          const {ratings} = product;
          let sumOfRatings=0;
          const totalRatings = ratings.length;
          for(const rating of ratings)
          {
            const {rate} = rating;
            sumOfRatings+=rate;
          }
          return sumOfRatings/totalRatings;
       }
    }
}
console.log(averageRating('eedfcf'));


//Create a function called likeProduct.
function likeProduct(productId,userId)
{
  for(const product of products)
  {
     const {_id} = product;
     if(_id === productId)
     {
        const {likes} = product;
        likes.push(userId);
     }
  }
}
likeProduct('eedfcf','fg12cy');
console.log(products);

// This function will helps to like to the product if it is not liked and remove like if it was liked.

function toggleLike(productId,userId)
{
  for(const product of products)
  {
     
     const {_id} = product;
     if(_id === productId)
     {
        const {likes} = product;
        if(likes.includes(userId))
        {
           const userIdToRemove=likes.indexOf(userId);
           likes.splice(userIdToRemove,1);
        }
        else
        {
          likes.push(userId);
        }
        
     }
  }
}

toggleLike('eedfcf','fg12cy');
console.log(products);