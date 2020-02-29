import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { Input} from '@material-ui/core';
import { observer, inject } from 'mobx-react'
import AddClient from './AddClient'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
toast.configure()
@inject('cs','as')
@observer 
class Actions extends Component {
    constructor(){
        super()
        this.state={
            fullName:"",
            owner:"",
            email_type:"",
            isValid:false
        }
    }
    notifyError = ()=>{
        toast.error('User is not exist')
    }
    notifySucc= ()=>{
        toast.success('Succseed')
    }

    handleInput=(e)=>{
        if(e.target.value){
            this.setState({
                [e.target.name]:e.target.value,
                Isvalid:true
            })
        }else{
            this.setState({
                Isvalid: false
            })
        }
    }

    updateClient=async()=>{
        let firstName=this.state.fullName.split(' ')[0]
        let lastName=this.state.fullName.split(' ')[1]
        let owner=this.state.owner
        let rest= await this.props.as.updateClient(firstName ,lastName ,owner)
        console.log(rest)
        if(rest==0){
            this.notifyError()
        }
        else{
            this.notifySucc()
        }
    }
    
    render() {
        return (
            <div className='action'>
                <br></br>
                <span className="updateClient">
                <h2 className="updateh2" >UPDATE CLIENT </h2> 
                <Button className="buttonUpdate" disabled={!this.state.Isvalid} onClick={this.updateClient}> Update Client </Button><br></br>
                <span>Client:</span> <Input type="text" name='fullName' placeholder="Clinet Name" onChange={this.handleInput}></Input>
                <br></br><br></br>
                <span>Transfer Ownership to owner:<form className="form">
                  <select className="custom-select" name="owner" onChange={this.handleInput}>{this.props.as.owners.map(e=><option>{e.o_name}</option>)}</select>
                </form>
                </span>
                <br></br>
                <span>Send email:</span>
                <form className="form">
                <select className="optionSold">
                    <option>Sold</option>
                </select>
                <h6><br></br>Declare sale!</h6>
                </form>
                </span>
                <AddClient/>

                
            </div>
        );
    }
}

export default Actions;