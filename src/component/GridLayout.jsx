
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const GridLayout = (props) => {
        return (
                    <div className="grid-root">
                        <GridList cellHeight={180} className="gridList">
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
                        </GridList>
                    </div>
        );
}

export default GridLayout;