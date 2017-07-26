import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import NewAccountsTable from '../components/NewAccountsTable';

class NewAccounts extends React.Component {
   render() {
      return (
        <div>
            <div>
            <h4 style= {{
                    marginLeft: '20px',
                }}>
                <b>New Accounts</b>
            </h4>
            </div>
            <NewAccountsTable />
        </div>
      )
   }
}

export default NewAccounts;