import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Input } from '@material-ui/core';
import { observer, inject } from 'mobx-react'
import AddClient from './AddClient'
@inject('cs')
@observer
class Actions extends Component {
    render() {
        return (
            <div className='action'>
                <h2>Update</h2>
                <h2>Client:   </h2><Input placeholder="Clinet Name"></Input>

                {/* <h3>Client: <input type="text" placeholder="Clinet Name"></input></h3> */}
                <h4>Transfer Ownership to owner:</h4>
                <select className="custom-select">
                    <option>Owner</option>
                </select>
                <h3>Send email:</h3>
                <select>
                    <option>email Type</option>
                </select>
                <h3>Declare sale!</h3>
                <h2>ADD CLIENT</h2>
                <AddClient/>

   
            </div>
        );
    }
}

export default Actions;