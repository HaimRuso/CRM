
import React, { Component,PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,
} from 'recharts';
import { inject,observer } from 'mobx-react';



@inject('ans')
@observer
class TopEmployees extends PureComponent {
    componentDidMount= async ()=> {
        this.props.ans.getTopOwenrs()
        console.log(this.props.ans.topOwners)
    }
    render() {
      return (
          <div className='topEmployee'>
        <ComposedChart
          layout="vertical"
          width={500}
          height={300}
          data={this.props.ans.topOwners}
          margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
            >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="Sales"  barSize={25} fill="#413ea0" />
          
        </ComposedChart>
        </div>
      );
    }
}

export default TopEmployees;