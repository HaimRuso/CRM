import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { observer, inject } from 'mobx-react'
import { Input} from '@material-ui/core';
@inject('cs', 'as')
@observer
class AddClient extends Component {
   constructor(){
       super()
       this.state={
           firstName:"",
           lastName:"",
           country:"Afghanistan",
           owner:"Barton Ramirez",
           email:""
       }
   }
   
   handleInput=(e)=>{
       
    this.setState({
        [e.target.name]:e.target.value
    },function(){
        console.log(this.state.email)
    })
   }
   addClient=()=>{
       let firstName=this.state.firstName
       let lastName=this.state.lastName
       let country=this.state.country
       let owner=this.state.owner
       let email=this.state.email
       console.log(firstName, lastName, country, owner)
       this.props.cs.addClient(firstName ,lastName ,country ,owner,email)
   }
   
   componentDidMount=()=>{
        this.props.as.getOwners()
        this.props.as.getCountries()
   }
   
    render() {
        return (
            <div className="container_addClinet">
                <span className="addClient" key="addClient">
                <h2 className="addh2">ADD CLIENT</h2>
                <Button className="buttonAdd" onClick={this.addClient}>Add New Client</Button><br></br>
                <span>First Name:<Input type="text" name='firstName' onChange={this.handleInput} ></Input></span><br></br>
                <span>Surname: <Input  type="text" name='lastName' onChange={this.handleInput} ></Input></span><br></br>
                <span>Email: <Input  type="email" name='email' onChange={this.handleInput} ></Input></span><br></br>
               <span>Country:<form className="form">
                    <select className="countrySelect" name='country' onChange={this.handleInput}>
                {this.props.as.countries.map(e=><option>{e.name}</option>)}
                </select>  
              </form>
                    <br></br>
                    </span>Owner:
                    <form className="form">
              <select name='owner' onChange={this.handleInput}>{this.props.as.owners.map(e=><option>{e.o_name}</option>)}</select>
                </form>
                </span>
            </div>
        );
    }
}

export default AddClient;