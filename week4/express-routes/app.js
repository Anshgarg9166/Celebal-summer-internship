const express = require('express');
const app = express();
const PORT = 4000;

const userRoute = require('./routes/User');
const commentRoute = require('./routes/Comments');

app.use("/users",userRoute);
app.use("/comments",commentRoute);

app.listen(PORT,()=>{
    console.log(`Listening on Port at ${PORT}`);
})
