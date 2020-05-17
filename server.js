const express = require('express')
const app = express()
const port = process.env.PORT || 4200
const bodyParser = require("body-parser")
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:123456@localhost/sql_crm')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
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

app.get('/owners', async function (req, res) {
  sequelize
    .query(`SELECT o_name FROM owners`)
    .then(function (result) {
      res.send(result)
    })
})


app.post('/addClient', async function (req, res) {
  console.log("im here")
  let ownerId = await sequelize.query(`SELECT owners.id FROM owners WHERE o_name='${req.body.owner}' `)
  ownerId = Object.values(ownerId[0][0])[0]
  let countryId = await sequelize.query(`SELECT countries.id FROM countries WHERE country='${req.body.country}' `)
  if (!countryId[0][0]) {
    await sequelize.query(`INSERT INTO countries(country) VALUES('${req.body.country}')`)
    countryId = await sequelize.query(`SELECT countries.id FROM countries WHERE country='${req.body.country}' `)
    console.log("done")
  }
  countryId = Object.values(countryId[0][0])[0]
  console.log(countryId)

  sequelize.query(`INSERT INTO clients(c_name,sname, email, firstContact, sale_status, email_type, owner, country)
   VALUES('${req.body.firstName}','${req.body.lastName}','${req.body.email}',NOW(),1,1,${ownerId},${countryId}) `)
    .then(function (result) {

      res.send(result)
    }
    )



})
app.put('/user/:id', function (req, res) {
  console.log(req.params.id)
  sequelize
    .query(`SELECT * FROM clients WHERE id=${req.params.id}  `)
    .then(function (result) {
      console.log(result)
      res.send(result)
    }
    )
})

app.put('/updateClient', async function (req, res) {
  console.log(req.body.sold)
  let clientId = await sequelize.query(`SELECT id FROM clients WHERE  c_name = '${req.body.fname}' AND sname = '${req.body.lname}' `)
  if (!Object.values(clientId[0])[0]) {
    res.send('0')
  }
  let ownerId = await sequelize.query(`SELECT owners.id FROM owners WHERE o_name='${req.body.or}'`)
  ownerId = Object.values(ownerId[0][0])[0]
  let updatedClinet = await sequelize.query(`UPDATE clients SET owner=${ownerId},
    sale_status=${req.body.sold} WHERE c_name = '${req.body.fname}' AND sname = '${req.body.lname}'`)
    .then(function (result) {
      res.send('done')
    }
    )
})
app.put('/changeClient', async function (req, res) {
  let countryId = await sequelize.query(`SELECT countries.id FROM countries WHERE country='${req.body.country}' `)
  if (!countryId[0][0]) {
    await sequelize.query(`INSERT INTO countries(country) VALUES('${req.body.country}')`)
    countryId = await sequelize.query(`SELECT countries.id FROM countries WHERE country='${req.body.country}' `)
    console.log("done")
  }
  countryId = await Object.values(countryId[0][0])[0]
  await sequelize.query(`UPDATE clients SET c_name='${req.body.firstName}',
  sname='${req.body.lastName}',email='${req.body.email}',country='${countryId}' WHERE email = '${req.body.identifyEmail}' `)
})
app.get('/topOwners', async function(req,res){
  let owners=await sequelize.query(`SELECT o_name, count(o_name) FROM owners JOIN clients ON owners.id=clients.owner
  WHERE clients.sale_status=true 
  GROUP BY owners.o_name 
  ORDER BY  count(o_name) DESC
  LIMIT 3`)
  
  let first=Object.values(owners[0][0])
  let second=Object.values(owners[0][1])
  let third=Object.values(owners[0][2])
  let ownersToSend={}
  ownersToSend[first[0]]=first[1]
  ownersToSend[second[0]]=second[1]
  ownersToSend[third[0]]=third[1]
  console.log(ownersToSend)
  res.send(ownersToSend)
})


app.get('/hotestCountry', async function(req,res){
  let hot=await sequelize.query(`SELECT countries.country  FROM clients JOIN countries ON countries.id=clients.country 
  WHERE sale_status=true
  Group BY countries.country
  ORDER BY count(countries.country) DESC
  LIMIT 1 `)

  res.send(hot[0][0].country)
})
app.delete('/deleteUser', async function (req, res) {
  let email=req.body.source
    await sequelize.query(`DELETE FROM clients WHERE email='${email}'`)
  res.send('Got a DELETE request at /user')
})
app.listen(port, () => console.log(`listening on port ${port}!`))