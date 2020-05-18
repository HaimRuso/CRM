import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer, inject } from 'mobx-react'
import AddClient from './Actions/AddClient'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import DeleteUser from './Actions/DeleteUser'
import UpdateClient from './Actions/UpdateClient';
import Form from './Actions/Form'
toast.configure()
@inject('cs','as')
@observer 
class Actions extends Component {

    
    render() {
        return (
            <div className='actions'>

                <AddClient/>
                <UpdateClient handleInput={this.handleInput} this />
                <DeleteUser/>
                <Form/>
            </div>
        );
    }
}

export default Actions;