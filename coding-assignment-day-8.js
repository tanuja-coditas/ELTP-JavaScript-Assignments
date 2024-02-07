function getLengthOfMissingArray(arrayOfArrays) {
  if(!Array.isArray(arrayOfArrays))
         return 0;
  let lengthOfSubArrays=[];
  if(arrayOfArrays.length === 0)
    return 0;
  for(let index=0;index<arrayOfArrays.length;index++)
    {
      if(!Array.isArray(arrayOfArrays[index]))
         return 0;
      if(arrayOfArrays[index].length === 0)
         return 0;
      lengthOfSubArrays.push(arrayOfArrays[index].length);
    }
    lengthOfSubArrays=lengthOfSubArrays.sort((a,b)=>{ return a-b;});
    let missingLength=lengthOfSubArrays[0];
    for(let index=0;index<lengthOfSubArrays.length;index++)
      {
         if(lengthOfSubArrays[index]!==missingLength)
            return missingLength;
        missingLength++;
      }
  return 0;
}