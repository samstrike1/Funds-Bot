import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const splashImg = require('./images/acc-maint.jpg');

const AccountMaintenance = () => (
    
    <MuiThemeProvider>
        <Card
            style= {{
                margin: '5px',
                padding: '5px',
            }}
        >
            <CardMedia
            overlay={<CardTitle title="Account Maintenance" subtitle="Account Maintenance from clients" />}
            >
                <img src={splashImg} alt=""/>
            </CardMedia>
        </Card>
    </MuiThemeProvider>
);

export default AccountMaintenance;