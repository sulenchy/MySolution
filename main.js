import express from 'express';
import path from 'path';

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send("Welcome to Alc currency converter");
});

app.listen(3020, () => console.log('Example app listening on port 3020!'))