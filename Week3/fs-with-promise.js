// const fs = require('fs/promises');

// console.log('First');

// fs.readFile("file.txt","utf-8")
//     .then((data)=>{console.log(data)})
//     .catch((err) => {console.log(err)})

// console.log('Second')

const fs = require('fs/promises');

async function readFile(){
    try{
        const data = await fs.readFile('file.txt','utf-8');
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
readFile();