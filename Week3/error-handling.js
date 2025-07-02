const makeError = () => {
    try{
        throw new Error("This is a custom error");
    }catch(err){
        console.error(err.stack);
        console.error(err.name);
        console.log(err.message);
    }
}
makeError();

// function customError(message){
//     this.message = message;
//     this.name = "Custom error";
//     this.stack = `${this.name}: ${this.message} `; 
// }