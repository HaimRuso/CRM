import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
@inject('cs')
@observer
class ClientsDetails extends Component {
    render() {
    

        return (
            // <tr className="clientRow" onClick={this.changeProp}>
            //     <th>{this.props.item.name}</th>
            //     <th>{this.props.item.email}</th>
            //     <th>{this.props.item.firstContact}</th>
            //     <th>{this.props.item.sold ==1 ? '✔': '-'}</th>
            //     <th>{this.props.item.owner}</th>
            //     <th>{this.props.item.country}</th>
            // </tr>
            <TableRow key="{row.name}">
              <TableCell align="right">{this.props.item.name}</TableCell>
              <TableCell align="right">{this.props.item.sName}</TableCell>
              <TableCell align="right">{this.props.item.country}</TableCell>
              <TableCell align="right">{this.props.item.firstContact}</TableCell>
              <TableCell align="right">{this.props.item.email}</TableCell>
              <TableCell align="right">{this.props.item.sold ==1 ? '✔': '-'}</TableCell>
              <TableCell align="right">{this.props.item.owner}</TableCell>
            </TableRow>
        );
    }
}

export default ClientsDetails;