require('dotenv').config()
const express = require('express')
const cors = require('cors')
//const bodyParser = require('body-parser')
const routes = require('./router')

const app = express()

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use('/api', routes)

app.listen(process.env.PORT || 8080, () => console.log(`Servidor iniciado na porta ${process.env.PORT}`))