const express = require('express')
const app = express()
const port = 4200
const bodyParser = require("body-parser")
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:123456@localhost/sql_crm')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})



app.get('/clients', (req, res) =>
  sequelize
    .query(`SELECT clients.id, clients.c_name, clients.sname, clients.email,
clients.firstContact, clients.sale_status, email_type.e_type, owners.o_name, countries.country FROM clients, countries, email_type, owners WHERE
 clients.country=countries.id AND clients.owner=owners.id AND clients.email_type=email_type.id `)
    .then(function (result) {
      res.send(result)
    }))

app.get('/filterdClients/:category/:name', (req, res) =>
  sequelize
    .query(`SELECT clients.id, clients.c_name, clients.sname, clients.email,
clients.firstContact, clients.sale_status, email_type.e_type, owners.o_name, countries.country FROM clients, countries, email_type, owners 
WHERE countries.${req.params.category.toLowerCase()} LIKE '${req.params.name}%'`)
    .then(function (result) {

      res.send(result)
    }))

    app.get('/owners', async function(req, res){
 
      sequelize
      .query(`SELECT o_name FROM owners`)
      .then(function (result) {

        res.send(result)
      })
    })


app.post('/addClient', async function (req, res) {
  let ownerId= await sequelize.query(`SELECT owners.id FROM owners WHERE o_name='${req.body.owner}' `)
  ownerId=Object.values(ownerId[0][0])[0]
  console.log(ownerId)
  let countryId= await sequelize.query(`SELECT countries.id FROM countries WHERE country='${req.body.country}' `)
  countryId=Object.values(ownerId[0][0])[0]
  console.log(countryId)

})
app.put('/user/:id', function (req, res) {
  console.log(req.params.id)
  sequelize
    .query(`SELECT * FROM clients WHERE id=${req.params.id} `)
    .then(function (result) {
      console.log(result)
      res.send(result)
    }
    )
})


app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
app.listen(port, () => console.log(`listening on port ${port}!`))