import { observable, action } from 'mobx'
import axios from 'axios';

export class AnalyticsStore{
 @observable topOwners=[]
 @observable hotestCountry=""

 
 @action getHotestCountry= async()=>{
    let hot =await axios.get('http://localhost:4200/hotestCountry')
    
    this.hotestCountry=hot.data
    console.log(this.hotestCountry)
 }
 
 
 @action getTopOwenrs= async ()=>{
     let owners =await axios.get('http://localhost:4200/topOwners')
     console.log(owners.data)
     let names=Object.keys(owners.data)
     console.log(names)
     let customers=Object.values(owners.data)
     console.log(customers)
     let temp=[]
     for(let i=0; i<names.length; i++){
         let obj={name:names[i],Sales:customers[i]}
         console.log(obj)
         temp.push(obj)
     }
     this.topOwners=temp
    //   this.topOwners=temp
 }

}