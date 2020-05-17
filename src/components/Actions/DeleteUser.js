import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Input} from '@material-ui/core';
import { observer, inject } from 'mobx-react'
import { toast } from 'react-toastify';

@inject('cs','as')
@observer 
class DeleteUser extends Component {
    constructor(){
        super()
        this.state={
            email:"",

        }
    }

            handleInput=(e)=>{
                let value=e.target.value
                this.setState({
                    email:value
                })
            }

            deleteUser= async()=>{
                await this.props.cs.getClients()
                if(this.props.cs.clients.find(e=> this.state.email==e.email) ){
                this.props.as.deleteUser(this.state.email)
                toast.success('the user is deleted')
                }else{
                toast.error('user is not exist')
                }

            }
    render() {
        return (
            <div className="deleteUser">
                <h2 className="updateh2" >DELETE CLIENT </h2> 
                <Button className="buttonUpdate" onClick={this.deleteUser}  > Delete Client </Button><br></br>
                <span> Email:</span> <Input type="text" name='fullName' placeholder="Clinet Email" onChange={this.handleInput} ></Input>
                <br></br><br></br>
            </div>
        );
    }
}

export default DeleteUser;