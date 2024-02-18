// const increement = (number) => {
    
//     const innerFunction = () =>
//     {
//         console.log(++number);
//     }
//     return innerFunction;
// }

// const result1 = increement(5);
// result1();
// result1();
// result1();
// const result2= increement(10);
// result2();
// result2();
// result2();
// result2();

const loanCalulator= (interestRate) =>
{ return [
     calculate=(principal,time) =>{
        return principal*time*interestRate/100;
    },
    update = (newInterestRate) => {
        interestRate =newInterestRate;
    }
]
    
   
}

const [calculateHomeLoan, updateHomeLoan] = loanCalulator();
updateHomeLoan(10);
console.log(calculateHomeLoan(10000,10));
console.log(calculateHomeLoan(20000,10));