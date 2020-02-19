const json = require('./data.json');
var moment = require('moment');
var Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:123456@localhost/sql_crm')
let countries=[]
let owners=[]
let emailTypes=[]
getData=(countries,owners,emailTypes)=>{
    json.forEach(e => !countries.includes(e.country) ? countries.push(e.country) : null );
    json.forEach(e => !owners.includes(e.owner) ? owners.push(e.owner) : null );
    json.forEach(e => !emailTypes.includes(e.emailType) ? emailTypes.push(e.emailType) : null );
}

getData(countries,owners,emailTypes)
let cobj={}
countriesobj=(countries,cobj)=>{
    let j=1
    for(let i=0; i<countries.length; i++){
        cobj[j]=countries[i]
        j++
    }
}
countriesobj(countries,cobj)
console.log(cobj)


// const populateDB = function(){
//     json.forEach(client => {
//         let contactDate = client.firstContact
//         let newContactDate = moment(contactDate).format("YYYY-MM-DD")
//         sequelize.query(`INSERT INTO client (c_id, cl_name,c_email, f_contact, sold) VALUES
//         ('${client._id}', '${client.name}', '${client.email}','${newContactDate}','${client.sold ? 1:0}')`)
//     })
// }

// populateDB()

// const populateDBcountry = function(){
//     countries.forEach(c => {
//         sequelize.query(`INSERT INTO countries VALUES(null,'${c}')`)
//     })
// }
//  populateDBcountry()

//  const populateDBcountry = function(){
//     emailTypes.forEach(c => {
//         sequelize.query(`INSERT INTO email_type VALUES(null,'${c}')`)
//     })
// }
//  populateDBcountry()

//  const populateDBcountry = function(){
//     owners.forEach(c => {
//         sequelize.query(`INSERT INTO owners VALUES(null,'${c}')`)
//     })
// }
//  populateDBcountry()


//         populateDB=  ()=>{
//     json.forEach( client  => {
//         let contactDate = client.firstContact
//         let newContactDate =  moment(contactDate).format("YYYY-MM-DD")
//          sequelize.query(`INSERT INTO client (c_id, cl_name,c_email, f_contact, sold)  VALUES(null, '${client.name}', '${client.email}','${newContactDate}',${client.sold ? 1:0})`)

//     })
// }
// populateDB()


//         let country=  `SELECT country_id 
//         FROM countries WHERE c_name='${client.country}'`;
//         let owner=  `SELECT o_id
//         FROM owners WHERE o_name='${client.owner}'`;

//          sequelize.query(country).spread(result => {
//             country =  result[0].country_id
//            let to=  `INSERT INTO client (co_id) VALUES(${country})`
//         })
//           sequelize.query(owner).spread( result => {
//             owner =  result[0].o_id
//             let to=  `INSERT INTO client (owner_id)  VALUES(${owner})`
            
//         })

// insertEmailType=()=>{
//     json.forEach( async client=>{
//     let email= await  `SELECT email_type_id  
//     FROM email_type 
//     WHERE email_type='${client.emailType}'`;
//             sequelize.query(email).spread( result => {
//              email =  result[0].email_type_id
//              let to=  `INSERT INTO client (c_email_type) VALUES(${email>0 ? email:null})`
//              sequelize
//              .query(to)
//              .then(result => console.log("done ", result));
//         })
//     })
        
// }

// insertEmailType()

insertEmailType=()=>{
    json.forEach( async client=>{
        let country= await  `SELECT country_id 
        FROM countries WHERE c_name='${client.country}'`;
         sequelize.query(country).spread( async result => {
            country = await  result[0].country_id
           let to= await `INSERT INTO client (co_id) VALUES(${country})`
             sequelize
             .query(to)
             .then(result => console.log("done ", result));
        })
    })
        
}

insertEmailType()