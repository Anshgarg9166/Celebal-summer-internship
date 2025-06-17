const fs = require('fs');

//used to  create a file 
// fs.writeFile('data.txt','Created in node js',(err) => {
//     if(err){
//         throw new Error(err);
//     }
//     console.log("File was written sucessfully");
// });

//Method 2 
//used to create file synchronously
try{
    fs.writeFileSync('data.txt','created in node js');
    console.log("File was created successfully");
}catch(e){
    console.log(e);
}


//used to read a file
// fs.readFile('data.txt','utf8',(err,data) => {
//     if(err){
//         throw new Error(err);
//     }
//     console.log(data);
// })

//used with both 
try{
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log(data);
}
catch(e){
    console.log(e);
}