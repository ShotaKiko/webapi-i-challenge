// implement your API here

const express = require('express');

const server = express();
const db = require('./data/db.js')
const { find } = db

server.listen(6492, () =>{
    console.log("Listening on port 6492.")
})

server.get('/' , (req, res) =>{
    res.send('<h2>Hello World!<h2>')
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