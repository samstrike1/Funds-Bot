import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const NewAccounts = () => (
    <MuiThemeProvider>
        <Card
            style= {{
                margin: '5px',
                padding: '5px',
            }}
        >
            <CardMedia
            overlay={<CardTitle title="New Accounts" subtitle="New Accounts from clients" />}
            >
                <img src="http://cdn.echeck.org/wp-content/uploads/2014/12/615x200-ehow-images-a04-h8-6o-bank-account-bad-credit-history-800x800.jpg" alt=""/>
            </CardMedia>
        </Card>
    </MuiThemeProvider>
);

export default NewAccounts;