const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//connect to database
const Sequlize = require("sequelize");
const sequelize = new Sequlize('mysql:root:qwerty@localhost:3386/joga_sequelize')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to the database.');
    })
    .catch(err => {
        console.log('Unable to connect to the database:', err);
    });
app.get("/", (req, res) => {
    res.json({message : "Welcome to sequlize application."});
});

app.listen(3020, () => {
    console.log('Server is running on http:localhost:3000');
});