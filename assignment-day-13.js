
const customReduce = (numbers,reduceFunction,accumulatorInitialValue=0) =>
{
    let result = 0;
    if(accumulatorInitialValue)
        result =accumulatorInitialValue;
    for(const number of numbers)
    {
        result=reduceFunction(result,number);
    }
    return result;
}

const numbers =[1,2,3,4,5];

console.log(customReduce(numbers,(accumulator,number) => accumulator+number,25));