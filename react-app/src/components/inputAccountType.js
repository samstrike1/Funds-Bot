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
const InputAccountType = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Account Type"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="RRSP"
    />
  </div>
);

export default InputAccountType;