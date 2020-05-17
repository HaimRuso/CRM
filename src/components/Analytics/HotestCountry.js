import React, { Component } from 'react';
import {FaGlobeAmericas} from 'react-icons/fa';
import { inject,observer } from 'mobx-react';

@inject('ans')
@observer
class HotestCountry extends Component {
   componentDidMount=()=>{
    this.props.ans.getHotestCountry()
   }
    render() {
        
        return (
            <div>
                <FaGlobeAmericas className='globus' /> <h1> {this.props.ans.hotestCountry}</h1>
            </div>
        );
    }
}

export default HotestCountry;