const mysql = require('mysql')
const dataEnv = process.env
const connection = mysql.createConnection({
    host: dataEnv.DB_HOST,
    user: dataEnv.DB_USER,
    password: dataEnv.DB_PASS,
    database: dataEnv.DB_NAME,
})

connection.connect((error) => {
    if (error) throw error
    console.log('Conectado ao DB: ' + dataEnv.DB_NAME)
})

module.exports = connection