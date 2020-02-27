const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/sql_crm')



let data = require('./data.json')
let ownersObj = {}
let ownersArry = []
let countryObj = {}
let countryArry = []
let emailTypeObj = {}
let emailTypeArry = []
let ownerCounter = 0
let countryCounter = 0
let emailTypeCounter = 0
for (let i = 0; i < data.length; i++) {
    if(!ownersObj[data[i].owner] && ownersObj[data[i].owner] != 0){
        ownersObj[data[i].owner] = ownerCounter + 1
        ownersArry[ownerCounter] = data[i].owner
        ownerCounter++
    }
    if(!countryObj[data[i].country]  && countryObj[data[i].country] != 0){
        countryObj[data[i].country] = countryCounter + 1
        countryArry[countryCounter] = data[i].country
        countryCounter++
    }
    if(!emailTypeObj[data[i].emailType]  && emailTypeObj[data[i].emailType] != 0 ){
        emailTypeObj[data[i].emailType] = emailTypeCounter + 1
        emailTypeArry[emailTypeCounter] = data[i].emailType
        emailTypeCounter++
    }
}
// for (i=0; i<ownersArry.length; i++) {
//     sequelize
//     .query(`INSERT INTO owners (o_name) VALUES('${ownersArry[i]}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }
// for (i=0; i<countryArry.length; i++) {
//     sequelize
//     .query(`INSERT INTO countries (country) VALUES('${countryArry[i]}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }
// for (i=0; i<emailTypeArry.length; i++) {
//     sequelize
//     .query(`INSERT INTO email_type (e_type) VALUES('${emailTypeArry[i]}')`)
//     .then(function (result) {
//         console.log(result)
//     })
// }
let arr=[]
for(let i=0; i<data.length;i++){
arr.push(data[i].name.split(' '))
}
console.log(arr[0][1])


for (let i = 0; i < data.length; i++) {
        
        
    // sequelize
    //     .query(`INSERT INTO clients (c_name,sname, email, firstContact, sale_status, email_type, owner, country) 
    //             VALUES('${data[i].name.split(' ')[0]}','${data[i].name.split(' ')[1]}' ,'${data[i].email}', NOW(), ${data[i].sold}, ${emailTypeObj[data[i].emailType]},${ownersObj[data[i].owner]},${countryObj[data[i].country]})`)
    //     .then(function (result) {
    //         console.log(result)
    //     })
}