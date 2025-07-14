const express = require('express')
const userRouter = require('./routes/userRouter')
const app = express();
app.use(express.json())
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
dotenv.config()

app.use('/api/user',userRouter);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT + ${process.env.PORT}`)
});
}).catch(err =>{
    console.log(`Error ocurred in connecting mongodb : ${err}`)
})



