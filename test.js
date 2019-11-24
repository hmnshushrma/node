// const express = require('express')
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'socka'
// })
// var app = express()
//
// connection.connect(function (err) {
//   if (!err) {
//     console.log('Database is connected ... nn')
//   } else {
//     console.log('Error connecting database ... nn')
//   }
// })
//
// app.get('/', function (req, res) {
//   connection.query('SELECT * from user LIMIT 2', function (err, rows, fields) {
//     connection.end()
//     if (!err) console.log('The solution is: ', rows)
//     else console.log('Error while performing Query.')
//   })
// })
//
// app.listen(3000)
//

class Employee {
  constructor (name) {
    this.name = name
  }

  fusayHi (args) {
    console.log(`hi this is ${this.name} & ${args}`)
    this.sayWelcome(args)
  }

  sayWelcome (args) {
    console.log(`welcome sir ${this.name} to ouw hotel ${args}`)
  }
}

module.exports = {
  Employee
}
