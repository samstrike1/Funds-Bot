import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import AccountInformation from './AccountInformation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const AccountInfoTabs = () => (
  <MuiThemeProvider>
    <Tabs>
      <Tab label="Account Information" >
        <div>
          <h2 style={styles.headline}>Account Information</h2>
            <AccountInformation />
        </div>
      </Tab>
      <Tab label="Bank Information" >
        <div>
          <h2 style={styles.headline}>Bank Information</h2>
          
        </div>
      </Tab>
    </Tabs>
  </MuiThemeProvider>
);

export default AccountInfoTabs;