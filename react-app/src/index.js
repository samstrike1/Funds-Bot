import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Dashboard from './pages/dashboard';
import NewAccounts from './pages/newAccounts'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component = {Dashboard} />
            <Route path ="new-accounts" component = {NewAccounts} />
        </Route>
    </Router>
), document.getElementById('App'))

registerServiceWorker();
