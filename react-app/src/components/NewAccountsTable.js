import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
const handleRowSelection = () => {
    browserHistory.push('new-accounts/4324521');
    //alert(PendingTradesData[selectedRows].account);
};

class NewAccountsTable extends React.Component {
  handleRowSelection = (selectedRows) => {
        browserHistory.push('new-accounts/4324521');
        //alert(PendingTradesData[selectedRows].account);
    };

  render() {
        return (
          <MuiThemeProvider>
            <Table onRowSelection={this.handleRowSelection}>
              <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}    
                >
                <TableRow>
                  <TableHeaderColumn></TableHeaderColumn>
                  <TableHeaderColumn><b>Name</b></TableHeaderColumn>
                  <TableHeaderColumn><b>Type</b></TableHeaderColumn>
                  <TableHeaderColumn><b>Goal</b></TableHeaderColumn>
                  <TableHeaderColumn><b>Risk</b></TableHeaderColumn>
                  <TableHeaderColumn><b>Value</b></TableHeaderColumn>
                  <TableHeaderColumn><b>Phone</b></TableHeaderColumn>
                  <TableHeaderColumn></TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false} >
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'new badge'}></span></TableRowColumn>
                  <TableRowColumn>John Smith</TableRowColumn>
                  <TableRowColumn>RRSP</TableRowColumn>
                  <TableRowColumn>Retirement</TableRowColumn>
                  <TableRowColumn>Balanced</TableRowColumn>
                  <TableRowColumn>$10,500</TableRowColumn>
                  <TableRowColumn>(416) 555-5555</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'signed badge'}></span></TableRowColumn>
                  <TableRowColumn>Randal White</TableRowColumn>
                  <TableRowColumn>RESP</TableRowColumn>
                  <TableRowColumn>Education</TableRowColumn>
                  <TableRowColumn>Growth</TableRowColumn>
                  <TableRowColumn>$5,000</TableRowColumn>
                  <TableRowColumn>(647) 222-9999</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                  <TableRow className="rowRotation table-link">
                    <TableRowColumn><span className={'new badge'}></span></TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Individual</TableRowColumn>
                    <TableRowColumn>Build Wealth</TableRowColumn>
                    <TableRowColumn>Balanced</TableRowColumn>
                    <TableRowColumn>$7,500</TableRowColumn>
                    <TableRowColumn>(416) 488-1003</TableRowColumn>
                    <TableRowColumn>
                      <IconButton>
                        <NavigationArrowForward />
                      </IconButton>
                    </TableRowColumn>
                  </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'new badge'}></span></TableRowColumn>
                  <TableRowColumn>Steve Brown</TableRowColumn>
                  <TableRowColumn>Joint</TableRowColumn>
                  <TableRowColumn>New Car</TableRowColumn>
                  <TableRowColumn>Aggressive</TableRowColumn>
                  <TableRowColumn>$20,000</TableRowColumn>
                  <TableRowColumn>(416) 329-7643</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'new badge'}></span></TableRowColumn>
                  <TableRowColumn>Christopher Nolan</TableRowColumn>
                  <TableRowColumn>Individual</TableRowColumn>
                  <TableRowColumn>Build Wealth</TableRowColumn>
                  <TableRowColumn>Growth</TableRowColumn>
                  <TableRowColumn>$35,000</TableRowColumn>
                  <TableRowColumn>(905) 102-5692</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'signed badge'}></span></TableRowColumn>
                  <TableRowColumn>Sam Adams</TableRowColumn>
                  <TableRowColumn>Joint</TableRowColumn>
                  <TableRowColumn>Build Wealth</TableRowColumn>
                  <TableRowColumn>Growth</TableRowColumn>
                  <TableRowColumn>$100,000</TableRowColumn>
                  <TableRowColumn>(426) 100-8453</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'new badge'}></span></TableRowColumn>
                  <TableRowColumn>James Abalone</TableRowColumn>
                  <TableRowColumn>RRSP</TableRowColumn>
                  <TableRowColumn>Education</TableRowColumn>
                  <TableRowColumn>Aggressive</TableRowColumn>
                  <TableRowColumn>$52,500</TableRowColumn>
                  <TableRowColumn>(647) 989-3322</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'signed badge'}></span></TableRowColumn>
                  <TableRowColumn>Melissa Roberts</TableRowColumn>
                  <TableRowColumn>Joint</TableRowColumn>
                  <TableRowColumn>Build Wealth</TableRowColumn>
                  <TableRowColumn>Balanced</TableRowColumn>
                  <TableRowColumn>$17,500</TableRowColumn>
                  <TableRowColumn>(613) 787-8902</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
                <TableRow className="rowRotation table-link">
                  <TableRowColumn><span className={'new badge'}></span></TableRowColumn>
                  <TableRowColumn>Francis Williams</TableRowColumn>
                  <TableRowColumn>RESP</TableRowColumn>
                  <TableRowColumn>Retirement</TableRowColumn>
                  <TableRowColumn>Balanced</TableRowColumn>
                  <TableRowColumn>$12,000</TableRowColumn>
                  <TableRowColumn>(905) 102-5692</TableRowColumn>
                  <TableRowColumn>
                    <IconButton>
                      <NavigationArrowForward />
                    </IconButton>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
          </MuiThemeProvider>
        )
  }
}

export default NewAccountsTable;