const mysql = require('mysql2/promise');  // Use promise version

const mysqlpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'system',
    database: 'employee_db',
    port:3006
});



module.exports = mysqlpool;