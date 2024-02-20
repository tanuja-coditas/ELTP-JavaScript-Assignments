
const promise = new Promise((resolve,reject) =>{

    users=[{name:"tanuja"},{name:"yashraj"},{name:"vineet"}];

    const promise1 = new Promise((resolve,reject) =>{
        const random=Math.random();
        if(random > 0.5)
            return resolve({data:users,statusCode:200,error:null});
        return reject({data:null,statusCode:500,error:{message:'Promise 1 failed'}});
    });

    const promise2=new Promise((resolve,reject) => {
        const random=Math.random();
        if(random > 0.5)
            return resolve({data:users,statusCode:200,error:null});
        return reject({data:null,statusCode:500,error:{message:'Promise 2 failed'}});
    })

    const promise3=new Promise((resolve,reject) => {
        const random=Math.random();
        if(random > 0.5)
            return resolve({data:users,statusCode:200,error:null});
        return reject({data:null,statusCode:500,error:{message:'Promise 3 failed'}});
    })
    const promise4=new Promise((resolve,reject) => {
        const random=Math.random();
        if(random > 0.5)
            return resolve({data:users,statusCode:200,error:null});
        return reject({data:null,statusCode:500,error:{message:'Promise 4 failed'}});
    })
    
    const promises = [
        promise1.then(result => ({ result })).catch(error => ({ error: {  error } })),
        promise2.then(result => ({ result })).catch(error => ({ error: { error } })),
        promise3.then(result => ({ result })).catch(error => ({ error: { error } })),
        promise4.then(result => ({ result })).catch(error => ({ error: {  error } }))
    ];
    Promise.all(promises)
    .then(results => {
       
        const resolvedPromises = results.filter(result => !result.error);
        resolvedPromises.forEach(result => {
            console.log("Resolved:", result.result);
        });
        const rejectedPromises = results.filter(result => result.error);
        rejectedPromises.forEach(result => {
            console.error(`Rejected:`, result.error.error);
        });
    });

})


promise.then((response) => console.log(response))
.catch((error) => console.log(error)
)



const url='https://dummyjson.com/users'

const newPromise = new Promise((resolve,reject)=>{
     fetch(url)
     .then((response) =>{
        if(!response.ok)
        throw new Error('API is not giving response');
       return response.json();
     })
     .then((data)=> resolve(data))
     .catch(error => reject(error))
})

newPromise
.then( data => console.log(data))
.catch( error => console.log(error))