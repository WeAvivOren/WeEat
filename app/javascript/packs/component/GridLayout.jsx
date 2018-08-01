
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Comments from './Comments';
import TouchRipple from 'material-ui/internal/TouchRipple';


const GridLayout = (props) => {
        return (
                    <div className="grid-root">
                        <GridList cellHeight={'auto'} className="gridList">
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            </GridListTile>
                            {props.filteredRestaurants.map(restaurant => (
                                <GridListTile key={restaurant.id}>
                                    <Comments key={restaurant.id} restaurant = {restaurant} >
                                    </Comments>
                                </GridListTile>
                            ))}
                        </GridList>

                    </div>
        );
}

export default GridLayout;