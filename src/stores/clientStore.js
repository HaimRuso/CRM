import { observable, action } from 'mobx'
import {client} from './client'
import axios from 'axios';


export class clientStore {
    @observable clients = [];
    
    @action addClient=async ()=>{
      let clients= await axios.get(`http://localhost:3000/clients`)
        clients.data[0].map(c=> this.clients.push(new client(c.id, c.c_name,c.sname, c.email, c.firstContact, c.e_type,c.sale_status, c.o_name, c.country)))

        } 
}
