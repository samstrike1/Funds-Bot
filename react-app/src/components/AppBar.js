import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExample = () => (
    <MuiThemeProvider>
        <AppBar
            title="Funds-Bot"
            style= {{
                backgroundColor: '#ee6e73',
            }}
        />
    </MuiThemeProvider>
);

export default AppBarExample;