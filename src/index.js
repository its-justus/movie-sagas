import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
// import our redux store
import store from './redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
