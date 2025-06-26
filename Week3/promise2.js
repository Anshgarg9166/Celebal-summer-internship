const recordVideoOne = new Promise((resolve,reject)=>{
    resolve('Video 1 recorded')
})
const recordVideoTwo = new Promise((resolve,reject)=>{
    resolve('Video 1 recorded')
})
const recordVideoThree = new Promise((resolve,reject)=>{
    resolve('Video 1 recorded')
})

Promise.all([recordVideoOne,recordVideoTwo,recordVideoThree]).then((message)=>{
    console.log(message)
})