import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import AccountInfoTabs from '../components/AccountInfoTabs';

class NewAccountInfo extends React.Component {
   render() {
      return (
        <div>
            <div>
            </div>
            <AccountInfoTabs />
        </div>
      )
   }
}

export default NewAccountInfo;