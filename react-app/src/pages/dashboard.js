import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import IndexGridList from '../components/IndexGridList';

class Dashboard extends React.Component {
   render() {
      return (
        <div>
            <h4 style= {{
                    marginLeft: '20px',
                }}>
                <b>Dashboard</b>
            </h4>
            <IndexGridList />
        </div>
      )
   }
}

export default Dashboard;