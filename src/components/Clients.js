import React, { Component } from 'react';
import ClientsDetails from './ClientsDetails'
import { observer, inject } from 'mobx-react'
import { TablePagination } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
@inject('cs')
@observer
class Clients extends Component {
    constructor() {
        super();
        this.state = {
            testText: "",
            category: "Name"
        }
    }
    category = (e) => {
        this.setState({
            category: e.target.value
        })
    }
    search = (e) => {
        console.log(e.target.value)
        console.log(this.state.category)
    }

    render() {
        return (
            <div>
                <select onChange={this.category} >
                    <option> Name</option>
                    <option>Country</option>
                </select>
                <input type="text" onChange={this.search} />
     
                {/* <table>
                    <tr className='title'>
                        <th>name </th>
                        <th>Email </th>
                        <th>First Contact </th>
                        <th>Sold </th>
                        <th>Owner </th>
                        <th>Country </th>
                    </tr>
                </table> */}
    <TableContainer component={Paper}>
    <Table className="{classes.table}" size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Surname</TableCell>
          <TableCell align="right">Country</TableCell>
          <TableCell align="right">First Contact</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Sold</TableCell>
          <TableCell align="right">Owner</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
                {this.props.cs.clients.map(e => <ClientsDetails item={e} />)}
        </TableBody>
      </Table>
      </TableContainer>
      
                </div>
        );
    }
}

export default Clients;