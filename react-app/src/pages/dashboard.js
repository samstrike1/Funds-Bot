import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import IndexGridList from '../components/indexGridList';

class Dashboard extends React.Component {
   render() {
      return (
         <IndexGridList />
      )
   }
}

export default Dashboard;