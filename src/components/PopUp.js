import React, { Component } from 'react';
import {Modal, Button, Row, Col,Form} from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import { Input} from '@material-ui/core';
@inject('cs')
@observer
class PopUp extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      country:"",
      email:""
    }
  }

  closePop = ()=>{
    this.props.close.closePop()
  }

  updateClient = ()=>{
    let changedClient ={
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      country: this.state.country,
      email:this.props.email
    }
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Update Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>First Name: <Input type="text" name='firstName' placeholder="First Name" onChange={this.handleInput}></Input> </div>
        <div>SurName: <Input type="text" name='lastName' placeholder="Surname" onChange={this.handleInput}></Input></div>
        <div>Country: <Input type="text" name='country' placeholder="Country" onChange={this.handleInput}></Input> </div>
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