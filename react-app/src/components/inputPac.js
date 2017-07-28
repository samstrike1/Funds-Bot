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
const InputPac = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="PAC"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="$500 Monthly"
    />
  </div>
);

export default InputPac;