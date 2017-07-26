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

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default class PendingTradesList extends React.Component {
    state = {
        showCheckboxes: false,
    };

    handleRowSelection = (selectedRows) => {
        browserHistory.push('pending-trades/' + PendingTradesData[selectedRows].account);
        //alert(PendingTradesData[selectedRows].account);
    };

    render() {
        return (
            <MuiThemeProvider>
                <Table onRowSelection={this.handleRowSelection}>
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}    
                    >
                    <TableRow>
                        <TableHeaderColumn>Account</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Client</TableHeaderColumn>
                        <TableHeaderColumn># Trades</TableHeaderColumn>
                        <TableHeaderColumn>$ Value</TableHeaderColumn>
                        <TableHeaderColumn>Source</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                    >
                    {PendingTradesData.map((pt) => (    
                        <TableRow className="rowRotation table-link">
                            <TableRowColumn>{pt.account}</TableRowColumn>
                            <TableRowColumn>{pt.name}</TableRowColumn>
                            <TableRowColumn>{pt.client}</TableRowColumn>
                            <TableRowColumn>{pt.trades}</TableRowColumn>
                            <TableRowColumn>{pt.value}</TableRowColumn>
                            <TableRowColumn>{pt.source}</TableRowColumn>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
    }
}
