import React, { Component } from 'react';
import TopEmployees from './Analytics/TopEmployees'
import { inject,observer } from 'mobx-react';
import HotestCountry from './Analytics/HotestCountry'
import '../Analytics.css'
@inject('ans')
@observer
class Analytics extends Component {
    render() {
        
        return (
            <div className="analytics">
                <HotestCountry/>
                <TopEmployees/>
            </div>
        );
    }
}

export default Analytics;