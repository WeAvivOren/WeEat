
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import RestaurantTile from "./RestraurantTile";

const GridLayout = (props) => {
        return (
            <MuiThemeProvider>
                <div className="grid-root">
                    <GridList cellHeight={180} className="gridList">
                        <RestaurantTile filteredRestaurants = {this.props.filteredRestaurants} > </RestaurantTile>

                    </GridList>
                </div>
            </MuiThemeProvider>
        );
}

export default GridLayout;