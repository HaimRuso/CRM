import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {clientStore} from './stores/clientStore'
import {actionStore} from './stores/actionStroe'
import { Provider } from 'mobx-react'
import App from './App';
import * as serviceWorker from './serviceWorker';

let cs= new clientStore();
let as= new actionStore ();
let stores={cs, as}

ReactDOM.render(<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
