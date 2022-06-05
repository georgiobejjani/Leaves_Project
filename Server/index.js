const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'T5ighlmff123',
    database: 'Leaves_db',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route to render the employees list from the database 
app.get('/api/v1/employees', (req, res) => {
    const sqlquery = 'select * from employee';
    db.query(sqlquery, (err, result) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: 'successfuly rendered employees',
                results: result

            })
        } else {
            return res.status(404).json({
                status: 2,
                message: 'An error occurred, no data has been found'
            })
        }
    })
})

// route to render the leaves from the database
app.get('/api/v1/leaves', (req, res) => {
    const sqlquery = 'select * from Leaves';
    db.query(sqlquery, (err, result) => {
        res.send(result);
    })
})

// route to add new employees to the database
app.post('/api/v1/insert/employee', (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const emailaddress = req.body.address
    const title = req.body.title
    const manager_id = req.body.manager_id
    const leaves_days = req.body.leaves_days

    const sqlInsert = "INSERT INTO Employee (FirstName, LastName,EmailAddress,EmploymentTitle,Manager_id,Leaves_days) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [firstname, lastname, emailaddress, title, manager_id, leaves_days], (err, result) => {
        if (!err) {
            return res.status(200).json({
                status: 1,
                message: 'Employee successfuly added',
                results: result
            })
        } else {
            return res.status(404).json({
                status: 404,
                message: 'Failed to add the Employee'
            })
        }

    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
})