import React, {Component} from 'react';
import InputInstitution from './inputInstitution';
import InputAccount from './inputAccount';
import InputAccountName from './inputAccountName';
import InputHolder from './inputHolder';
import InputPac from './inputPac';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class BankInfomation extends React.Component {

  render() {
    return (
        <div style= {{
                    marginRight: '10%',
                    marginLeft: '12%',
                    marginTop: 40,
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
          <InputInstitution />
          <InputAccount />
          <InputAccountName />
          <InputHolder />
          <InputPac />

        </div>
    );
  }
}
export default BankInfomation;