import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
class AccountInfomation extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SelectField
            floatingLabelText="Citizenship"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Canada" />
            <MenuItem value={2} primaryText="United States" />
            <MenuItem value={3} primaryText="Mexico" />
          </SelectField>
          <br />
          <SelectField floatingLabelText="Frequency" value={1} disabled={true}>
            <MenuItem value={1} primaryText="Disabled" />
            <MenuItem value={2} primaryText="Every Night" />
          </SelectField>
          <br />
          <SelectField
            floatingLabelText="Frequency"
            value={this.state.value}
            onChange={this.handleChange}
            style={styles.customWidth}
          >
            <MenuItem value={1} primaryText="Custom width" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <br />
          <SelectField
            floatingLabelText="Frequency"
            value={this.state.value}
            onChange={this.handleChange}
            autoWidth={true}
          >
            <MenuItem value={1} primaryText="Auto width" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default AccountInfomation;