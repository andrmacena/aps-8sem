const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//configurando servidor para o protocolo http
const server = require('http').Server(app)

app.use(bodyParser())

//conexão com banco de dados
mongoose
    .connect('mongodb+srv://semana:rocketseat@cluster0-ocqjp.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true })

app.use(require('./routes'))

server.listen(3333)