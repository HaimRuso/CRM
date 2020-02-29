import React, { Component } from 'react';
import './../App.css';
import ClientsDetails from './ClientsDetails'
import { observer, inject } from 'mobx-react'
import Table from 'react-bootstrap/Table'
import PopUp from './PopUp'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';




@inject('cs')
@observer
class Clients extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
            category: "Name",
            indexStart: 0,
            indexEnd: 19,
            showenClients: []
           
        }
    }
    componentDidMount = async () => {
        await this.props.cs.getClients()
        this.showFirstPage()
    }
    showFirstPage = () => {
        this.setState({
            indexStart: 0,
            indexEnd: 19
        })
        let temp = []
        for (let i = this.state.indexStart; i <= this.state.indexEnd && i < this.props.cs.clients.length; i++) {
            temp.push(this.props.cs.clients[i])
        }
        this.setState({
            showenClients: temp
        })
    }

    nextPage = () => {
        let range = this.state.indexEnd
        // console.log(range)
        if (range < this.props.cs.clients.length) {
            if (this.props.cs.clients.length-range < 19) {
        
                this.setState({
                    indexStart: this.state.indexEnd,
                    indexEnd: this.state.indexEnd + (this.props.cs.clients.length-range)
                })
            }
            else {
                this.setState({
                    indexStart: this.state.indexEnd,
                    indexEnd: this.state.indexEnd + 20
                }, function () {
                    console.log(this.state.indexStart, this.state.indexEnd)
                    let temp = []
                    for (let i = this.state.indexStart;
                        i < this.state.indexEnd && i < this.props.cs.clients.length; i++) {
                        temp.push(this.props.cs.clients[i])
                    }
                    this.setState({
                        showenClients: temp
                    })
                })
            }
        }
    }
    backPage = () => {
        if (this.state.indexStart === 0) {
            this.showFirstPage()
            return
        }

        let temp = []
        for (let i = this.state.indexEnd - 1; i > this.state.indexStart; i--) {
            temp.push(this.props.cs.clients[i])
        }

        this.setState({
            showenClients: temp,
            indexEnd: this.state.indexStart,
            indexStart: this.state.indexStart - 20 < 0 ? 0 : this.state.indexStart - 20
        }, function() {
            if (this.state.indexStart === 0) {
                this.showFirstPage()
            }
        })
    }
    changeCategory=(e)=>{
        this.showFirstPage()
        this.setState({
            category:e.target.value
        },function(){
            this.props.cs.searchByCategory(this.state.category,this.state.text)
        })}
    searchByCategory= async (e)=>{
        this.setState({text:e.target.value},async function(){
            let category=this.state.category
            await this.props.cs.getClients()
            this.props.cs.searchByCategory(category,this.state.text)
            this.showFirstPage()
        })
        
    }


    render() {
        return (
            <div className="clients" key="clients">
                <select onChange={this.changeCategory} >
                    <option> Name</option>
                    <option> Surname</option>
                    <option>Country</option>
                    <option>Owner</option>
                </select>
                <input type="text" onChange={this.searchByCategory} />
                <span className="nav">  <i class="fa fa-angle-left" onClick={this.backPage}></i> {this.state.indexStart}...{this.state.indexEnd} <i class="fa fa-angle-right" onClick={this.nextPage}></i></span>
                <Table responsive striped bordered hover >
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Country</th>
                            <th scope="col">First Contact</th>
                            <th scope="col">Email</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Owner</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.showenClients.map(e => <ClientsDetails item={e} />)}

                    </tbody>
                </Table>


            </div>
        );
    }
}

export default Clients;