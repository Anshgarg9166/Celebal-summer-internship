function firstTask(callback){
    setTimeout(function(){
        console.log("First taak");
        callback();
    },700);
}

function secondTask(callback){
    setTimeout(function(){
        console.log("Second task");
        callback();
    },1500)
}

function thirdTask(callback){
    setTimeout(function(){
        console.log("Third Task");
    },700);
}

firstTask(function(){
    secondTask(function(){
        thirdTask();
    })
})