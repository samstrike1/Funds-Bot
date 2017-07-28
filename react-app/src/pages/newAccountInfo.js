import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import AccountInfoTabs from '../components/AccountInfoTabs';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

class NewAccountInfo extends React.Component {
   render() {
      return (
        <div>
            <div>
              <h4 style= {{
                    marginLeft: '20px',
                }}>
                <b>Documents Ready for Approval</b>
              </h4>
            </div>
            <MuiThemeProvider>
              <div style={{width: '100%', margin: '0 auto', }}>
                <RaisedButton label="KYC Document" backgroundColor={'rgb(225, 24, 54)'} labelColor={'#fff'} style={style} />
                <RaisedButton label="RRSP Application" backgroundColor={'rgb(225, 24, 54)'} labelColor={'#fff'} style={style} />
                <RaisedButton label="Send For Signature" backgroundColor={'#2196F3'} labelColor={'#fff'} style={style} />
                <RaisedButton label="Approve" backgroundColor={'#4CAF50'} labelColor={'#fff'} style={style} buttonStyle={{fontColor: '#fff',}} />
              </div>
            </MuiThemeProvider>
            <AccountInfoTabs />
        </div>
      )
   }
}

export default NewAccountInfo;