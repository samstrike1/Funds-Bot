import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Dashboard from './pages/dashboard';
import NewAccounts from './pages/newAccounts';
import PendingTrades from './pages/pendingTrades';
import NewAccountInfo from './pages/newAccountInfo'
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component = {Dashboard} />
            <Route path ="new-accounts" component = {NewAccounts} />
            <Route path ="new-accounts/4324521" component = {NewAccountInfo} />
            <Route path ="pending-trades" component = {PendingTrades} />
            <Route path="pending-trades/:account" component = {PendingTrades}/>
        </Route>
    </Router>
), document.getElementById('App'))

registerServiceWorker();
