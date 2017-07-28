import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    customWidth: {
        width: '33%',
    },
    customFloatWidth: {
        width: '75%',
    },
  floatStyle: {
      fontSize: 16,
  },
};


/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
class SelectProvince extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div style={styles.customWidth}>
        <SelectField
          floatingLabelText="Province"
          floatingLabelStyle={styles.floatStyle}
          style={styles.customFloatWidth}
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Ontario" />
          <MenuItem value={2} primaryText="Quebec" />
          <MenuItem value={3} primaryText="Alberta" />
          <MenuItem value={4} primaryText="British Columbia" />
        </SelectField>
      </div>
    );
  }
}
export default SelectProvince;