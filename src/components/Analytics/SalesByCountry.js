

import React, { Component,PureComponent } from 'react';
import { inject,observer } from 'mobx-react';
import {
  ComposedChart, Line, Area, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
@inject('ans')
@observer
class SalesByCountry extends Component {
    
  componentDidMount=()=>{
    this.props.ans.getByCountries()
  }
    
    
    render() {
        
        return (
            <div className="salesByCountry">
<BarChart
        width={800}
        height={300}
        data={this.props.ans.countries}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="number" stackId="a" fill="#f39c12"  />
        
      </BarChart>
            </div>
        );
    }
}

export default SalesByCountry;