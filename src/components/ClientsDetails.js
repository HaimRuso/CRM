import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import moment from 'moment'
import PopUp from './PopUp'

@inject('cs')
@observer
class ClientsDetails extends Component {
   constructor(){
   super()
    this.state={
        email:"",
        popUp:false
     }
}
  

//     updateUser=(e)=>{
//     console.log(e.currentTarget.id)
//     this.props.cs.updateUser(e.currentTarget.id)
//    }
    closePop=()=>{
        this.setState({
            popUp: !this.state.popUp
           },function(){
               console.log(this.state.popUp)
           })

    }
   togglePop=()=>{
       
    if(!this.state.popUp){
       this.setState({
        email:this.props.item.email,
        popUp: !this.state.popUp
       },function(){
       })
    }
   }

   
    render() {
        return (
            <tr onClick={this.togglePop} value={this.props.item}    >
            <td>{this.props.item.name}</td>
            <td>{this.props.item.surname}</td>
            <td>{this.props.item.country}</td>
            <td>{moment(this.props.item.firstContact).utc().format('DD-MM-YYYY')}</td>
            <td className="email" >{this.props.item.email}</td>
            <td>{this.props.item.sold ===1 ? '✔': '❌'}</td>
            <td>{this.props.item.owner}</td>
            {<PopUp item={this.props} close={this} email={this.state.email}  show={this.state.popUp} /> }
            </tr>
            
           
         
            
        );
    }
}


export default ClientsDetails;