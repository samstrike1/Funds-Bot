import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import PendingTradeList from '../components/PendingTradeList';
import PendingTradeInfo from '../components/PendingTradeInfo';
import PendingTradesData from '../components/PendingTradesData';

class PendingTrades extends React.Component {
    getAccount = () => {
        var result;
        PendingTradesData.forEach(function(pt) {
            if(pt.account == this.props.params.account){
                result = pt;
            }
        }, this);

        return result;
    };
   getView = () => {
        if(this.props.params.account != null){  //checks to see if account param is provided.
            return (
                <div>
                    <h4 style= {{
                            marginLeft: '20px',
                        }}>
                        <b>Pending Trades - {this.getAccount().name}</b>
                    </h4>
                    <PendingTradeInfo {...this.props} />
                </div>
            )
        } else {
            return (
            <div>
                <h4 style= {{
                        marginLeft: '20px',
                    }}>
                    <b>Pending Trades</b>
                </h4>
                <h2 style= {{fontSize: 24,
                            paddingTop: 16,
                            marginBottom: 12,
                            fontWeight: 400,
                            textAlign: 'center',}}
                >
                5 Accounts Pending
                </h2>
                <PendingTradeList />
            </div>
                
            )
        }
   };

   render() {
        return (this.getView());      
   }
}

export default PendingTrades;