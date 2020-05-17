import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {clientStore} from './stores/clientStore'
import {actionStore} from './stores/actionStroe'
import {AnalyticsStore} from './stores/analyticsStore'
import { Provider } from 'mobx-react'
import App from './App';
import * as serviceWorker from './serviceWorker';

let cs= new clientStore();
let as= new actionStore ();
let ans= new AnalyticsStore()
let stores={cs, as,ans}

ReactDOM.render(<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
