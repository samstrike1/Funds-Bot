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
const InputAccountName = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Account Name"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="Sams Retirement"
    />
  </div>
);

export default InputAccountName;