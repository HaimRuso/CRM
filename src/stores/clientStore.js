import { observable, action } from 'mobx'
import { client } from './client'
import axios from 'axios';


export class clientStore {
  @observable clients = [];

  @action getClients = async () => {
    let clients = await axios.get(`http://localhost:4200/clients`)
    
    let temp = []
    clients.data[0].map(c => temp.push(new client(c.id, c.c_name, c.sname, c.email, c.firstContact, c.e_type, c.sale_status, c.o_name, c.country)))
    // console.log(temp)
    this.clients = temp
  }
  @action addClient= async (firstName,lastName,country,owner,email)=>{
    let newClient= {firstName:firstName, lastName:lastName, country:country, owner:owner, email:email}
    let result=await axios.post('http://localhost:4200/addClient', newClient)
    // console.log(result)
  }


  @action searchByCategory = (category, text) => {
      if(text){
      let filterd = this.clients.filter(e => e[category.toLowerCase()].toLowerCase().includes(text.toLowerCase()))
      this.clients = filterd
      }else{
      this.getClients()
      }
  }

  @action updateClient = async (client) => {
    let user = await axios.put(`http://localhost:4200/changeClient`,client )
    this.getClients()
  }
}
