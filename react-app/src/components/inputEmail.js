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
const InputEmail = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Email"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="sam.adams@cgi.com"
    />
  </div>
);

export default InputEmail;