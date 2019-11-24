import 'dotenv/config'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const path = require('path')
const bcrypt = require('bcryptjs')

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'nixcraft',
  database: 'jarvis'
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

db.connect(err => {
  if (!err) console.log('connected to database')
  else {
    console.log(
      'db not connected \n Error : ' + JSON.stringify(err, undefined, 2)
    )
  }
})

global.db = db
const registerUser = (req, res) => {
  const {
    body: {
      user_name: userName,
      first_name: firstName,
      last_name: lastName,
      password,
      email_id: emailId
    }
  } = req

  const hashedPassword = bcrypt.hashSync(password, 8)

  var sql =
    'INSERT INTO users (user_name,first_name,last_name,password, email_id) VALUES ?'
  var values = [[userName, firstName, lastName, hashedPassword, emailId]]

  db.query(sql, [values], function (err) {
    if (err) throw err
    return 'user registerd'
    db.end()
  })
  res.send(req.body)
}

app.post('/api/data', (request, response) => {
  registerUser(request, response)
})

app.get('/', (request, response) =>
  response.sendFile(`${__dirname}/index.html`)
)

app.get('/api/items', (req, res) => {
  const jsonObj = require(`${__dirname}/src/data/data.json`)
  res.json(jsonObj)
})

app.get('/users/:id', (req, res) => {
  var userId = req.params.id
  if (!userId) return res.sendStatus(400).json({ error: 'Missing id' })
  var searchSql = 'select * from users where id = ?'
  db.query(searchSql, [userId], function (error, results, fields) {
    console.log(error, 'defined error')
    if (error && error === null) {
      res.send({
        code: 400,
        failed: 'error ocurred'
      })
    } else {
      if (!results) {
        res.send({
          status: 404,
          message: 'no data found'
        })
      } else {
        res.send({
          status: 200,
          message: 'login sucessfull',
          data: results
        })
      }
    }
  })
})
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
)
