import React from 'react';
import ReactDOM from 'react-dom';
import AppBarExample from './App';
import NewAccounts from './newAccounts';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <AppBarExample />, 
    document.getElementById('AppBar')
);
ReactDOM.render(
    <NewAccounts />, 
    document.getElementById('NewAccounts')
);
registerServiceWorker();
