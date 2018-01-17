import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import root from './reducers';
import App from './components/App';


let store = createStore(root);

ReactDOM.render(
    <App store={store} />,
    document.getElementById("root")
);