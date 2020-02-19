import React, { Component } from 'react';

class UpdateClient extends Component {
    render() {
        return (
            <div>
                <div>Update</div>
                <div>Transfer Ownership to : </div>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <button>Transfer</button>
                <span></span>


            </div>
        );
    }
}

export default UpdateClient;