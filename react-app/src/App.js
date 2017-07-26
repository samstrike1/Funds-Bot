import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import AppBarExample from './components/AppBar';

class App extends React.Component {
   render() {
      return (
         <div>
            <AppBarExample />
				
           {this.props.children}
         </div>
      )
   }
}

export default App;