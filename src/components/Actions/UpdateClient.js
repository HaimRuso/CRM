import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import { Button, Form } from 'react-bootstrap';
import { Input} from '@material-ui/core';
import { toast } from 'react-toastify';

@inject('cs','as')
@observer 
class UpdateClient extends Component {
    constructor(){
        super()
        this.state={
            fullName:"",
            owner:"Barton Ramirez",
            email_type:"",
            isValid:false,
            sold:true
        }
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
    sold=(e)=>{
        if(e.target.value=='Sold'){
            this.setState({
                sold:true
            })
        }else{
            this.setState({
                sold:false
            })
        }
    }
    updateClient=async()=>{
        let firstName=this.state.fullName.split(' ')[0]
        let lastName=this.state.fullName.split(' ')[1]
        let owner=this.state.owner
        let sold=this.state.sold
        let rest= await this.props.as.updateClient(firstName ,lastName ,owner,sold)
        console.log(rest)
        if(rest==0){
            toast.error('User is not exsist')
        }
        else{
            toast.success('the user is updated')
        }
    }
  
    render() {
        return (
            <div className="updateClient">
            <h2 className="updateh2" >UPDATE CLIENT </h2> 
            <Button className="buttonUpdate" disabled={!this.state.Isvalid} onClick={this.updateClient}> Update Client </Button><br></br>
            <span>Client:</span> <Input type="text" name='fullName' placeholder="Clinet Name" onChange={this.handleInput}></Input>
            <br></br><br></br>
            <span>Transfer Ownership to owner:<form className="form">
              <select className="custom-select" name="owner" onChange={this.handleInput}>{this.props.as.owners.map(e=><option>{e.o_name}</option>)}</select>
            </form>
            </span>
            <br></br>
            <span>Sale Status</span>
            <form className="form">
            <select name="sold" onChange={this.sold} className="optionSold">
                <option>Sold</option>
                <option>Unsold</option>
            </select>
           
            </form>
            </div>
        );
    }
}

export default UpdateClient;