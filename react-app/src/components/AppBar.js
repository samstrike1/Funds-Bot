import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import CommunicationPhone from 'material-ui/svg-icons/communication/phone'
import SearchBar from 'material-ui-search-bar'
import ActionFace from 'material-ui/svg-icons/action/face'
import Badge from 'material-ui/Badge';
import PhoneDialog from './PhoneDialog';
import ActionHome from 'material-ui/svg-icons/action/home'
/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExample = () => (
    <MuiThemeProvider>
        <AppBar
            className="app-bar"
            title="Funds-Bot"
            style= {{
                backgroundColor: '#e11836',
            }}
            iconElementLeft={<Link to="/"><IconButton><ActionHome color={ '#fff' }/></IconButton></Link>}
            iconElementRight={
            <div>
                <span style={{float: 'left', marginRight: '35px',}}>
                    <Badge
                        badgeContent={5}
                        badgeStyle={{top: 2, right: 2, width: '18px', height:'18px', backgroundColor:'rgb(0, 188, 212)', color:'#fff', fontWeight: 600, fontSize: 13,}}
                        style={{padding: '0px'}}
                    >
                        <PhoneDialog />
                    </Badge>
                </span>
                    <SearchBar
                        onChange={() => console.log('onChange')}
                        onRequestSearch={() => console.log('onRequestSearch')}
                        style={{
                            float: 'left',
                            margin: '0 auto',
                            maxWidth: 800,
                            marginRight: '30px',
                        }}
                    />
                <span style={{float: 'right', marginRight: '25px',}}>
                    <IconButton><ActionFace color={ '#fff' }/></IconButton>
                </span>
            </div>
            }
        />
    </MuiThemeProvider>
);

export default AppBarExample;