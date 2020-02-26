import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { observer, inject } from 'mobx-react'
@inject('cs', 'as')
@observer
class AddClient extends Component {
   constructor(){
       super()
       this.state={
           firstName:"",
           lastName:"",
           country:"",
           owner:""
       }
   }
   
   handleInput=(e)=>{
       console.log(e.target.name, e.target.value)
    this.setState({
        [e.target.name]:e.target.value
    })
   }
   addClient=()=>{
       let firstName=this.state.firstName
       let lastName=this.state.lastName
       let country=this.state.country
       let owner=this.state.owner
       console.log(firstName, lastName, country, owner)
       this.props.cs.addClient(firstName ,lastName ,country ,owner)
   }
   
   componentDidMount=()=>{
        this.props.as.getOwners()
        this.props.as.getCountries()
   }
   
    render() {
        return (
            <div>
                <h3>First Name<input type="text" name='firstName' onChange={this.handleInput} ></input></h3>
                <h3>Surname<input  type="text" name='lastName' onChange={this.handleInput} ></input></h3>
                <h3>Country<Form.Control as="select">
                {this.props.as.countries.map(e=><option>{e.name}</option>)}
              </Form.Control>
                    </h3>
              <select>{this.props.as.owners.map(e=><option>{e.o_name}</option>)}</select>
                <Button onClick={this.addClient}>Add New Client</Button>
            </div>
        );
    }
}

export default AddClient;