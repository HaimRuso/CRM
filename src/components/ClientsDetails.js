import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import moment from 'moment'
@inject('cs')
@observer
class ClientsDetails extends Component {
   constructor(){
   super()
    this.state={
        seen:false
     }
}
  

    updateUser=(e)=>{
    console.log(e.currentTarget.id)
    this.props.cs.updateUser(e.currentTarget.id)
   }
   togglePop=()=>{
    this.setState({
        seen: !this.state.seen
       });
   }
   
    render() {
    
        
        return (
            // <tr className="clientRow" onClick={this.changeProp}>
            //     <th>{this.props.item.name}</th>
            //     <th>{this.props.item.email}</th>
            //     <th>{this.props.item.firstContact}</th>
            //     <th>{this.props.item.sold ==1 ? '✔': '-'}</th>
            //     <th>{this.props.item.owner}</th>
            //     <th>{this.props.item.country}</th>
            // </tr>
            <tr>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.sName}</td>
            <td>{this.props.item.country}</td>
            <td>{moment(this.props.item.firstContact).utc().format('DD-MM-YYYY')}</td>
            <td>{this.props.item.email}</td>
            <td>{this.props.item.sold ==1 ? '✔': '-'}</td>
            <td>{this.props.item.owner}</td>
            </tr>
            //   {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
         
            
        );
    }
}


export default ClientsDetails;