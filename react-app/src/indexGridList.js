import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
    img: require('./images/acc-app.jpg'),
    title: 'New Accounts',
    subtitle: 'New Accounts from clients',
  },
  {
    img: require('./images/acc-maint.jpg'),
    title: 'Account Maintenance',
    subtitle: 'Account Maintenance from clients',
  },
  {
    img: require('./images/client-trade.jpg'),
    title: 'Client Directed Trades',
    subtitle: 'Clinets choose there own trades',
  },
  {
    img: require('./images/system-trade.jpg'),
    title: 'System Directed Trades',
    subtitle: 'System handles the trades',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const IndexGridList = () => (
  <div style={styles.root}>
    <MuiThemeProvider>
      <GridList
        cellHeight={300}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span style={styles.subtitle}>{tile.subtitle}</span>}
          >
            <img alt="splash" src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </MuiThemeProvider>
  </div>
);

export default IndexGridList;
