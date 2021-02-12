const express = require('express');

// middleware
const morgan = require('morgan');


const axios = require('axios');

const app = express();

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/example', (req, res) => {
    res.send("Hello Example")
})

// example json reponse
app.get('/json', (req, res) => {
    res.json({
        prop1: 'hello',
        prop2: "hello2"
    })
})

// example json request
// add middleware express.json()
app.post('/json', (req, res) => {
    console.log(req.body)
    res.send("Received!")
})


// Use Morgan for logger, middlware

// example consume API
app.get('/rick/', (req, res) => {
    console.log(req.params)
    URL = 'https://rickandmortyapi.com/api/character'
    axios.get(URL)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
        res.send(error)
      }); 
})

// get single id
app.get('/rick/:id', (req, res) => {
    console.log(req.params)
    URL = `https://rickandmortyapi.com/api/character/${req.params.id}`
    axios.get(URL)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data)
      })
      .catch(function (error) {
        console.log(error);
        res.send(error)
      }); 
})

app.listen(3000, () => {
    console.log("Server on port 3000");
})