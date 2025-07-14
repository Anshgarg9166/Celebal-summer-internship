const express = require('express')
const app = express();

const db = require('./db')
const employeeRoutes = require('./controllers/employee.controller')

//middleware
app.use('/api/employees',employeeRoutes);

async function dbConnection() {
    try {
        await db.query("SELECT 1")
        .then(()=>{console.log("db connection is successful")})
        app.listen(4000,()=>{
        console.log("Server is listening on port 4000")
})
    } catch (err) {
        console.log("Error:", err);
    }
}

dbConnection();

