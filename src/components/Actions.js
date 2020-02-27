import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { Input} from '@material-ui/core';
import { observer, inject } from 'mobx-react'
import AddClient from './AddClient'
@inject('cs')
@observer 
class Actions extends Component {
    render() {
        return (
            <div className='action'>
                <br></br>
                <h2>UPDATE CLIENT</h2>
                <span>Client:   </span><Input placeholder="Clinet Name"></Input><br></br><br></br>
                <span>Transfer Ownership to owner:<form className="form">
                  <select className="custom-select"  width="300"><option className="drop">Owner</option></select>
                </form>
                </span>
                <br></br>
                <span>Send email:</span>
                <form className="form">
                <select>
                    <option>email Type</option>
                </select>
                </form>
                <h6>Declare sale!</h6>
                <br></br>
                <h2>ADD CLIENT</h2>
                <AddClient/>
            </div>
        );
    }
}

export default Actions;