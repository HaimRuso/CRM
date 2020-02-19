const express = require('express')
const app = express()
const port = 3000
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:123456@localhost/sql_crm')


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})


app.get('/clients', (req, res) =>
sequelize
.query(`SELECT * FROM clients , countries, email_type, owners WHERE
 clients.country=countries.id AND clients.owner=owners.id AND clients.email_type=email_type.id `)
.then(function (result) {
  console.log(result)
    res.send(result)
}))



app.post('/', function (req, res) {
  res.send('Got a POST request')
})
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
app.listen(port, () => console.log(`listening on port ${port}!`))