//code 1
// let p = new Promise((resolve,reject) => {
//     let a = 1 + 1;
//     if(a == 3){
//         resolve('Success')
//     }
//     else{
//         reject('Failed')
//     }
// })

const { resolve } = require("path");
// p.then((message)=>{
//     console.log("This is in then " + message);
// }).catch((message) => {
//     console.log("This is in catch "+message);
// })


//code 2
// const userLeft = false;
// const userWatchingCatMeme = false;
// function watchTutorialCallback(callback,errorCallback){
//     if(userLeft){
//         errorCallback({
//             name : 'user Left',
//             message : ':('
//         })
//     }
//     else if(userWatchingCatMeme){
//         errorCallback({
//             name : 'user watching cat meme',
//             message : 'hello < cat'
//         })
//     }
//     else{
//         callback('Both are false')
//     }
// }

// watchTutorialCallback((message)=>{
//     console.log('Sucess : '+ message)
// },(error)=>{
//     console.log(error.name + " "+ error.message)
// })


//code 2 with promise
const userLeft = false;
const userWatchingCatMeme = true;
function watchTutorialPromise(){
    return new Promise((resolve,reject)=>{
    if(userLeft){
        reject({
            name : 'user Left',
            message : ':('
        })
    }
    else if(userWatchingCatMeme){
        reject({
            name : 'user watching cat meme',
            message : 'hello < cat'
        })
    }
    else{
        resolve('Both are false')
    }
    })
}

watchTutorialPromise().then((message)=>{
    console.log('Sucess : '+ message)
}).catch((error)=>{
    console.log(error.name + " "+ error.message)
})
