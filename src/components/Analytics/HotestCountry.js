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
            <div className="hotestCountry">
                <FaGlobeAmericas className='globus' /> 
                <span className='sss' > Hotest Country: {this.props.ans.hotestCountry}</span>
            </div>
        );
    }
}

export default HotestCountry;