
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const RestaurantTile = (props) => {
    return (
        <MuiThemeProvider>
            <div>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    </GridListTile>
                    {props.filteredRestaurants.map(restaurant => (
                        <GridListTile key={restaurant.id}>
                            <img src={restaurant.img} alt={restaurant.name} />
                            <GridListTileBar
                                title={restaurant.name}
                                subtitle={<span>by: {restaurant.address}</span>}

                            />
                        </GridListTile>
                    ))}
    </div>
        </MuiThemeProvider>
    );
}

export default RestaurantTile;