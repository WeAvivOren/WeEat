
import React from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const RestaurantTile = (props) => {
    return (
                <GridListTile key={props.restaurant.id}>
                    <img src={props.restaurant.img} alt={props.restaurant.name} />
                    <GridListTileBar
                        title={props.restaurant.name}
                        subtitle={<span>by: {props.restaurant.address}</span>}
                    />
                </GridListTile>
    );
}

export default RestaurantTile;