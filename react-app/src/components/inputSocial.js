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
const InputSocial = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Social Insurance No"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="458-900-100"
    />
  </div>
);

export default InputSocial;