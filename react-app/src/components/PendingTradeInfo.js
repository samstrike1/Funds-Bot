import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import PendingTradesData from '../components/PendingTradesData';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const style = {
  margin: 12,
};

var Section = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return (
      <div className={this.state.class}>
        <button>toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>
            {this.props.title}
            <span className="sectionprct">{this.props.percent}</span>
        </div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

export default class PendingTradesList extends React.Component {
    state = {
        showCheckboxes: false,
        selectable: false,
    };

    getAccount = () => {
        var result;
        PendingTradesData.forEach(function(pt) {
            if(pt.account == this.props.params.account){
                result = pt;
            }
        }, this);

        return result;
    };

    getAssetDetails = (assets) => {
        return (
            <MuiThemeProvider>
                <Table
                    selectable={this.state.selectable}
                >
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}    
                    >
                    <TableRow>
                        <TableHeaderColumn><b>Asset</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Target %</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Current MV</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Current Weight %</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Source</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Trades</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Post MV</b></TableHeaderColumn>
                        <TableHeaderColumn><b>Post Target %</b></TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                    >
                    {assets.map((asset) => (
                        <TableRow>
                            <TableRowColumn>{asset.assetName}</TableRowColumn>
                            <TableRowColumn>{asset.targetPrct}</TableRowColumn>
                            <TableRowColumn>{asset.currentMV}</TableRowColumn>
                            <TableRowColumn>{asset.currentWeight}</TableRowColumn>
                            <TableRowColumn>{asset.source}</TableRowColumn>
                            <TableRowColumn>
                                <input type="text" defaultValue={asset.trades} />
                            </TableRowColumn>
                            <TableRowColumn>{asset.postMV}</TableRowColumn>
                            <TableRowColumn>{asset.postTargetPrct}</TableRowColumn>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        );
    };

    buildRender = () => {
        var pt = this.getAccount();
        if (pt != undefined){
            return (
                <div>
                    <MuiThemeProvider>
                        <RaisedButton label="Approve" backgroundColor={'#4CAF50'} labelColor={'#fff'} style={style} buttonStyle={{fontColor: '#fff',}} />
                    </MuiThemeProvider>
                    <Section title="Equities" percent={pt.equitiesPrct}>
                        {this.getAssetDetails(pt.equitiesRec)}
                    </Section>
                    <Section title="Fixed Income" percent={pt.fixedIncomePrct}>
                        {this.getAssetDetails(pt.fixedIncomeRec)}
                    </Section>
                    <Section title="Cash"  percent={pt.cashPrct}>
                        {this.getAssetDetails(pt.cashRec)}
                    </Section>
                    <MuiThemeProvider>
                        <Table>
                            <TableHeader
                                displaySelectAll={this.state.showCheckboxes}
                                adjustForCheckbox={this.state.showCheckboxes}    
                            >
                            <TableRow>
                                <TableHeaderColumn style={{textAlign: 'right'}}><b>Risk</b></TableHeaderColumn>
                                <TableHeaderColumn style={{textAlign: 'center'}}><b style={{position: 'relative', left: 33}}>Target</b></TableHeaderColumn>
                                <TableHeaderColumn style={{textAlign: 'center'}}><b style={{position: 'relative', right: 33}}>Actual</b></TableHeaderColumn>
                                <TableHeaderColumn><b style={{position: 'relative', right: 20}}>Post Trade</b></TableHeaderColumn>
                            </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={this.state.showCheckboxes}
                            >
                            {pt.risk.map((risk) => (
                                <TableRow>
                                    <TableRowColumn style={{textAlign: 'right'}}>{risk.name}</TableRowColumn>
                                    <TableRowColumn style={{textAlign: 'center'}}><span style={{position: 'relative', left: 33}}>{risk.target}</span></TableRowColumn>
                                    <TableRowColumn style={{textAlign: 'center'}}><span style={{position: 'relative', right: 33}}>{risk.actual}</span></TableRowColumn>
                                    <TableRowColumn>{risk.postTrade}</TableRowColumn>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </MuiThemeProvider>
                </div>
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