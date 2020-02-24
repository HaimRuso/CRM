import { observable, action } from 'mobx'
import {client} from './client'
import axios from 'axios';


export class clientStore {
    @observable clients = [];
    
    @action addClient=async ()=>{
      let clients= await axios.get(`http://localhost:4200/clients`)
      console.log(clients)
      let temp=[]
      clients.data[0].map(c=> temp.push(new client(c.id, c.c_name,c.sname, c.email, c.firstContact, c.e_type,c.sale_status, c.o_name, c.country)))
        this.clients=temp
        console.log(this.clients)

        } 
        @action searchByCategory= async (category, name)=>{
          console.log(category, name)
          let filterd= this.clients.filter(e=> e.category.toLowerCase()==category && e.name==name )
          console.log(filterd)
        }

        @action updateUser=async(id)=>{
         
          let user= await axios.put(`http://localhost:3000/user/${id}`)
          
        }
}
