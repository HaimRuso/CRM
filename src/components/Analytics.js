import React, { Component } from 'react';
import TopEmployees from './Analytics/TopEmployees'
import { inject,observer } from 'mobx-react';
import HotestCountry from './Analytics/HotestCountry'
import OutstandingClients from './Analytics/OutstandingClients'
import EmailSent from './Analytics/EmailSent'
import SalesByCountry from './Analytics/SalesByCountry'
import Ages from './Analytics/Ages'
import '../Analytics.css'
@inject('ans')
@observer
class Analytics extends Component {
    
    render() {
        
        return (
            <div className="analytics">
                <div className="headerAnalytics">
                <HotestCountry/>
                <OutstandingClients/>
                <EmailSent/>
                </div>
                <div className='graphs'>
                <TopEmployees/>
                <SalesByCountry/>
                <Ages/>
                </div>
                

            </div>
        );
    }
}

export default Analytics;