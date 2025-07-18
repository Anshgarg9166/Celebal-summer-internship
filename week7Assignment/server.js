const dotenv = require('dotenv');
dotenv.config()

const express = require('express')
const app = express();
app.use(express.json())

const userRouter = require('./routes/userRouter')
const { default: mongoose } = require('mongoose');
const authRoute = require('./routes/authRoutes')
const authMiddleware = require('./middlewares//authMiddleware')

app.use('/api/auth',authRoute);
app.use('/api/user',authMiddleware,userRouter);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on PORT ${process.env.PORT}`)
});
}).catch(err =>{
    console.log(`Error ocurred in connecting mongodb : ${err}`)
})



