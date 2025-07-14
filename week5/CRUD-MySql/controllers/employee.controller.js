const express = require('express');

router = express.Router();

//localhost:4000/api/employees/
router.get('/',(req,res) =>{
    res.send("List of employees");
})

module.exports = router;