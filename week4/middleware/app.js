const express = require('express');
const app = express();

let name = "Ansh";
let password = 123456;

app.get('/',(req,res)=>{
    res.send("hello !");
})

app.use(loginMiddleware);

//this is used to handle static file
app.use(express.static('./public'));

app.get('/profilepage',(req,res)=>{
    res.send("THis is Ansh")
})

app.get('/feedpage',(req,res)=>{
    res.send("This is feed page");
})

app.listen(8000,()=>{
    console.log("Listening on port 8000")
})


// function loginMiddleware(req,res,next){
//     console.log("I am login Middleware");
//     
//     next();
// };

function loginMiddleware(req,res,next){
    if(name == 'Ansh' && password == 123456){
        // next is used to go next app route
        next();
    }else{
        res.send('Cannot authenicate the user');
    }
    
}