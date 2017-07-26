import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Dashboard from './pages/dashboard';
import NewAccounts from './pages/newAccounts'
import PendingTrades from './pages/pendingTrades'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component = {Dashboard} />
            <Route path ="new-accounts" component = {NewAccounts} />
            <Route path ="pending-trades" component = {PendingTrades} />
            <Route path="pending-trades/:account" component = {PendingTrades}/>
        </Route>
    </Router>
), document.getElementById('App'))

registerServiceWorker();
