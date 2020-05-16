var mysql = require('mysql')

module.exports = {
  HOST: "us-cdbr-iron-east-02.cleardb.net",
  USER: "b7e2437887xxxa",
  PASSWORD: "0200xxx6",
  DB: "heroku_7643ec736354xxx"
};
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'crm_db'
// })


connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()