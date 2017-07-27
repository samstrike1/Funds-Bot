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
                <b>Account Onboarding</b>
            </h4>
            </div>
            <div>
                <h2 style= {{fontSize: 24,
                            paddingTop: 16,
                            marginBottom: 12,
                            fontWeight: 400,
                            textAlign: 'center',}}
                >
                9 New Accounts Ready for Onboarding
                </h2>
            </div>
            <NewAccountsTable />
        </div>
      )
   }
}

export default NewAccounts;