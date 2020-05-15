import React, { Component } from 'react';
import {Modal, Button, Row, Col,Form} from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import { Input} from '@material-ui/core';
@inject('cs','as')
@observer
class PopUp extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      country:"Afghanistan",
      email:""
    }
  }

  closePop = ()=>{
    this.props.close.closePop()
  }

  componentDidMount= ()=>{
    this.props.as.getCountries()
  }

  updateClient = ()=>{
    let changedClient ={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      country: this.state.country,
      email:this.state.email,
      identifyEmail:this.props.email
    }
    console.log(changedClient)
    this.props.cs.updateClient(changedClient)
  }
  handleInput=(e)=>{
    console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
      } 
     render() {
       return (
        <Modal 
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Title className="pop" id="contained-modal-title-vcenter">
           Update Client
          </Modal.Title>
        <Modal.Body className="popBody" >
        <div>First Name: <Input type="text" name='firstName' placeholder="First Name" onChange={this.handleInput}></Input> </div>
        <div>SurName: <Input type="text" name='lastName' placeholder="Surname" onChange={this.handleInput}></Input></div>
        <div>Email: <Input type="text" name='email' placeholder="Email" onChange={this.handleInput}></Input></div>
        <div>Country:                    
               <select className="countrySelect" name='country' onChange={this.handleInput}>
                {this.props.as.countries.map(e=><option>{e.name}</option>)}
                </select>   </div>
        <br></br>
        <div>
        <Button className="buttonUpdate" onClick={this.updateClient} > Update Client </Button>
        <Button className="closeBTN" onClick={this.closePop} >Close</Button>
        </div>
        </Modal.Body>
        
        
      </Modal>
       );
      }
     }


export default PopUp;