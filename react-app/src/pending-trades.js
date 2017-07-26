import React from 'react';
import ReactDOM from 'react-dom';
import AppBarExample from './App';
import IndexGridList from './indexGridList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <AppBarExample />, 
    document.getElementById('AppBar')
);
ReactDOM.render(
    <IndexGridList />, 
    document.getElementById('IndexGridList')
);

registerServiceWorker();
