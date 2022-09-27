const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/MovieDB'

const app = express();
mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const movieRouter = require('./routes/router')

app.use('/router', movieRouter)

app.listen(9000, () => {
    console.log('started')
})