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
  
  var owner = await sequelize.query(`INSERT INTO owners(o_name) VALUES('${req.body.owner}')`)
  const lastIdo=await sequelize.query(`SELECT LAST_INSERT_ID() FROM owners `)
  const getOwnerId=Object.values(lastIdo[0][0])[0]
  var country = await sequelize.query(`INSERT INTO countries(country) VALUES('${req.body.country}')`)
  const lastIdc=await sequelize.query(`SELECT LAST_INSERT_ID() FROM owners `)
  const getCountryId=Object.values(lastIdc[0][0])[0]


  var clients = await sequelize.query(`INSERT INTO clients(c_name,sname,email,firstContact,sale_status,email_type,owner,country)

   VALUES('${req.body.firstName}','${req.body.lastName}','${req.body.country}','-',NOW(),1, 1, ${getOwnerId},${getCountryId}`)

  res.send("sababa")
 
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