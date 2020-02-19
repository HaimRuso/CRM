
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react'
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import Clients from './components/Clients'
@observer
class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <ul className="nav-bar">
      <li className="item"><Link to='/CLients'> CLients</Link></li>
      <li className="item"><Link to='/Actions'> Actions </Link></li>
      <li className="item"><Link to='/Analytics'> Analytics </Link></li>
      </ul>
     <Route exact path='/CLients'><Clients/></Route>
      </Router>
     
      </div>
    );
  }
}

export default App;

