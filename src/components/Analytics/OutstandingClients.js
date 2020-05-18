import React, { Component } from 'react';
import { inject,observer } from 'mobx-react';
import {FaUserCircle} from 'react-icons/fa';
@inject('ans','cs')
@observer
class OutstandingClients extends Component {
    
    unSold=()=>{
        let unSold=this.props.cs.clients.filter(e => !e.sold)
        return unSold.length
    }
    
    render() {
        return (
            <div>
                <FaUserCircle className='outstandingIcon' />
                {this.unSold()}
            </div>
        );
    }
}

export default OutstandingClients;