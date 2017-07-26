import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: "100%",
    height: "100%",
    overflowY: 'auto',
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.54)",
  },
};

const tilesData = [
  {
    img: require('../images/acc-app.jpg'),
    title: 'New Accounts',
    subtitle: 'New Accounts from clients',
    url: 'new-accounts',
  },
  {
    img: require('../images/acc-maint.jpg'),
    title: 'Account Maintenance',
    subtitle: 'Account Maintenance from clients',
    url: '#',
  },
  {
    img: require('../images/system-trade.jpg'),
    title: 'Pending Trades',
    subtitle: 'Handles pending trades',
    url: 'pending-trades',
  },
];
  
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const IndexGridList = () => (
  <div style={styles.root}>
    <MuiThemeProvider>
      <GridList
        cellHeight={600}
        cols={3}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <Link
            className="tile-link"
            to={tile.url}
          >
            <GridTile
              key={tile.img}
              title={tile.title}
              subtitle={<span style={styles.subtitle}>{tile.subtitle}</span>}
            >
              <img alt="splash" src={tile.img} />
            </GridTile>
          </Link>
        ))}
      </GridList>
    </MuiThemeProvider>
  </div>
);

export default IndexGridList;