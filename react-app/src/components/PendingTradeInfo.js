import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import PendingTradesData from '../components/PendingTradesData';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class PendingTradesList extends React.Component {
    getAccount = () => {
        var result;
        PendingTradesData.forEach(function(pt) {
            if(pt.account == this.props.params.account){
                result = pt;
            }
        }, this);

        return result;
    };

    buildRender = () => {
        var pt = this.getAccount();
        if (pt != undefined){
            return (<p>Account exists. {pt.account}</p>
                
            );
        }else{
            return (<p>Account doesn't exist.</p>);
        }
    };

    render() {
        return (
            this.buildRender()
        );
    }
}