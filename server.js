'use strict'

const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

// routes
// app.get('/', (request, reponse )=>{
//     reponse.status(200).send('Hello');
// });

app.get('/about', (request, reponse )=>{
    reponse.status(200).send('About me ');
});

// app.use('*', (request, response)=>{
//     response.send('An arror occured');
// })

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
});