import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import PendingTradeList from '../components/PendingTradeList';
import PendingTradeInfo from '../components/PendingTradeInfo';

class PendingTrades extends React.Component {
   getView = () => {
        if(this.props.params.account != null){  //checks to see if account param is provided.
            return (<PendingTradeInfo {...this.props} />)
        } else {
            return (<PendingTradeList />)
        }
   };

   render() {
        return (
            <div>
                <div>
                <h4 style= {{
                        marginLeft: '20px',
                    }}>
                    <b>Pending Trades</b>
                </h4>
                </div>
                {this.getView()}
            </div>
        );      
   }
}

export default PendingTrades;