function firstTask(callback){
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber == 1){
        callback(new Error("Error execcuting first task"));
    }
    else{
        setTimeout(function(){
            console.log("First task")
        },400);
        callback(null);
    }
}

function secondTask(callback){
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber == 1){
        callback(new Error("Error execcuting second task"));
    }
    else{
        setTimeout(function(){
            console.log("second task")
        },1500);
        callback(null);
    }
}

function thirdTask(callback){
    const randomNumber = Math.floor(Math.random()*10);
    if(randomNumber == 1){
        callback(new Error("Error execcuting third task"));
    }
    else{
        setTimeout(function(){
            console.log("third task");
             console.log("Task third compeleted succesfully")
        },500);
        
    }
}

firstTask(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("task one compeleted successfully")
    }
    secondTask(function(error){
        if(error){
            console.log(error);
        }
        else{
            console.log("Task two compeleted succesfully")
        }
        thirdTask();
    })
});