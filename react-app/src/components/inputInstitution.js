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
const InputInstitution = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Institution Name"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="Bank of CGI"
    />
  </div>
);

export default InputInstitution;