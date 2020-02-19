import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {clientStore} from './stores/clientStore'
import { Provider } from 'mobx-react'
import App from './App';
import * as serviceWorker from './serviceWorker';

let cs= new clientStore();
cs.addClient()
let stores={cs}

ReactDOM.render(<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
