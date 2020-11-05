const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose

// Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb') //db nesse caso é o nomedo meu container(servico) estipulado no compose

// Teste
server.get('/', (req, res, next) => res.send('Backend'))

// Start Server
server.listen(3000)