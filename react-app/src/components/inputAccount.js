import React from 'react';
import TextField from 'material-ui/TextField';

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
const InputAccount = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Account Number"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="4324521"
    />
  </div>
);

export default InputAccount;