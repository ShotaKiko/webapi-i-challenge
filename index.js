// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db.js')
const { find } = db
const { insert } = db

//middleware
server.use(express.json())

server.listen(6492, () =>{
    console.log("Listening on port 6492.")
})

server.get('/' , (req, res) =>{
    res.send('<h2>Hello World!<h2>')
})

//POST request endpoint~~~~~~~~~~~~~~~~~~~~~`

server.post('/users' , (req , res) => {
    const newUser = req.body;
    
    insert(newUser)
    .then(addedUser => {
        res.status(201).json(addedUser)
    })
    .catch(err => {
        res.status(400).send(err, "Please provide name and bio for the user.")
    });
})


//Get request~~~~~~~~~~~~~~~~~~~~~~~~~~~~

server.get('/users', (req, res) => {
    find()
    .then(allUsers => {
        res.json(allUsers)
    })
    .catch(err => {
        res.status(500).send(err, "The users' information could not be retireved.")
    })
})