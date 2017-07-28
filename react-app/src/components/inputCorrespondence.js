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
const InputCorrespondence = () => (
  <div style={styles.customWidth}>
    <TextField style={styles.customFloatWidth}
      floatingLabelText="Correspondence Address"
      floatingLabelStyle={styles.floatStyle}
      defaultValue="150 Commerce Valley Drive West"
    />
  </div>
);

export default InputCorrespondence;