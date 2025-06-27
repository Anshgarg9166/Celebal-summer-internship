function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log("Making request to "+location);
        if(location === 'google'){
            resolve('Google says hii');
        }else{
            reject('We can only talk to google');
        }
    })
}

function processRequest(response){
    return new Promise((reslove,reject)=>{
        console.log('Processing request');
        reslove(`Extra Information `+ response);
    })
}

// makeRequest('google').then(response =>{
//     console.log('Response Recieved');
//     return processRequest(response);
// }).then(responsefrompreocessRequest =>{
//     console.log(responsefrompreocessRequest)
// }).catch(err =>{
//     console.log(err);
// })

//With async and await

async function doWork(){
    try{
    const response = await makeRequest('google');
    console.log('Response Recieved');
    const processRequestResponse = await processRequest(response);
    console.log(processRequestResponse);
    }
    catch(error){
        console.log(error);
    }
}

doWork();