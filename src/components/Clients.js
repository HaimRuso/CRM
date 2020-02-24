import React, { Component } from 'react';
import './../App.css';
import ClientsDetails from './ClientsDetails'
import { observer, inject } from 'mobx-react'
import Table from 'react-bootstrap/Table'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


  
@inject('cs')
@observer
class Clients extends Component {
    constructor() {
        super();
        this.state = {
            testText: "",
            category: "Name",
            index:0,
            showenClients:[]
        }
    }
    componentDidMount=()=>{
        this.setState({
            index:0
        })
      this.retClientsNext()  
    }
    retClientsNext=()=>{
        if(this.props.cs.clients.length-this.state.index<=0){
            return
        }
        let temp=[]
        for(let i=this.state.index; i<this.state.index+20&& i<this.props.cs.clients.length; i++){
            temp.push(this.props.cs.clients[i])
        }
        let range=this.props.cs.clients.length-this.state.index
        if(range>20){
        this.setState({
            showenClients:temp,
            index: this.state.index+20
        })
    }
    else{
        this.setState({
            showenClients:temp,
            index: this.state.index+range
        })
    }
    }
    retClientsBack=()=>{
        console.log(this.state.index)
        
        if(this.state.index>20){
            console.log("Dd")
        }
        else{
            return
        }
        let temp=[]
        for(let i=this.state.index-1; i>0 && i>this.state.index-20 && this.props.cs.clients.length>=0 ; i--){
            temp.push(this.props.cs.clients[i])
        }
        this.setState({
            showenClients:temp,
            index: this.state.index-20
        })

    }
    category = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    search = (e) => {
        this.props.cs.searchByCategory(this.state.category,e.target.value )
    }

    render() {
        return (
            <div>
                <select onChange={this.category} >
                    <option> Name</option>
                    <option>Country</option>
                </select>
                <input type="text" onChange={this.search} />
    <span className="nav" onClick={this.retClientsBack}> <i class="fa fa-angle-left"></i></span>
    <span className="nav"  onClick={this.retClientsNext}>  {this.state.index-20>=0 ? this.state.index-20: null } ... {this.state.index} <i class="fa fa-angle-right"></i></span>
 
      <Table  responsive striped bordered hover>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Country</th>
      <th scope="col">First Contact</th>
      <th scope="col">Email</th>
      <th scope="col">Sold</th>
      <th scope="col">Owner</th>
    </tr>
  </thead>
  <tbody>
      
  {this.state.showenClients.map(e => <ClientsDetails item={e} />)}
  
  </tbody>
</Table>
                
      
      </div>
        );
    }
}

export default Clients;