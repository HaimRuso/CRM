import { observable, action } from 'mobx'
import axios from 'axios';
import { toast } from 'react-toastify';
toast.configure()

export class actionStore{
    @observable owners=[]
    @observable countries=[]

    
    @action getOwners=async ()=>{
        let owners= await axios.get(`http://localhost:4200/owners`)
         this.owners=owners.data[0]

    }
    @action getCountries=async ()=>{
        let countries= await axios.get(`https://restcountries.eu/rest/v2/all`)
        this.countries=countries.data
    }

    
  @action updateClient= async (firstName,lastName,owner,sold)=>{
    let updatedClinet={fname:firstName, lname:lastName, or:owner,sold:sold}
    let result=await axios.put('http://localhost:4200/updateClient',updatedClinet)
    return result.data
  }

  @action deleteUser=async (email)=>{
    console.log(email)
    axios.delete('http://localhost:4200/deleteUser', {

      data: {
        source: email
      }
    });

}

}