import React, {Component} from 'react';
import SelectCitizen from './selectCitizen';
import SelectCountry from './selectCountry';
import SelectProvince from './selectProvince';
import InputSocial from './inputSocial';
import InputResidential from './inputResidential';
import InputFirstName from './inputFirstName';
import InputLastName from './inputLastName';
import InputDate from './inputDate';
import InputCity from './inputCity';
import InputCode from './inputCode';
import InputAccountType from './inputAccountType';
import InputCorrespondence from './inputCorrespondence';
import InputEmail from './inputEmail';
import InputCell from './inputCell';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AccountInfomation extends React.Component {

  render() {
    return (
        <div style= {{
                    marginRight: '10%',
                    marginLeft: '12%',
                    marginTop: 40,
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
          <InputFirstName />
          <InputLastName />
          <SelectCitizen  />
          <InputSocial />
          <InputEmail />
          <InputCell />
          <InputAccountType />
          <InputResidential />
          <InputCity />
          <SelectCountry  />
          <InputCode />
          <SelectProvince />
          <InputCorrespondence />
          <InputCity />
          <SelectCountry  />
          <InputCode />
          <SelectProvince />
        </div>
    );
  }
}
export default AccountInfomation;