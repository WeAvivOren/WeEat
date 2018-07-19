
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";


class Toolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cuisines : [
                {
                    "id": 4,
                    "name": "italic",
                    "created_at": "2018-07-15T14:37:13.507Z",
                    "updated_at": "2018-07-15T14:37:13.507Z"
                },
                {
                    "id": 5,
                    "name": "american",
                    "created_at": "2018-07-16T07:52:49.073Z",
                    "updated_at": "2018-07-16T07:52:49.073Z"
                },
                {
                    "id": 6,
                    "name": "bbq",
                    "created_at": "2018-07-16T07:53:29.425Z",
                    "updated_at": "2018-07-16T07:53:29.425Z"
                },
                {
                    "id": 7,
                    "name": "bbq",
                    "created_at": "2018-07-16T07:53:57.284Z",
                    "updated_at": "2018-07-16T07:53:57.284Z"
                }
            ],
            restaurants : [
                {
                    "id": 2,
                    "name": "מרסלוס",
                    "cuisine_id": 4,
                    "rating": 2,
                    "accepts_10bis": true,
                    "address": "Marcelos, ריבל 7, Tel Aviv-Yafo",
                    "max_delivery_time_minutes": 34,
                    "created_at": "2018-07-15T15:05:17.588Z",
                    "updated_at": "2018-07-15T15:05:17.588Z"
                },
                {
                    "id": 3,
                    "name": "cccc",
                    "cuisine_id": 5,
                    "rating": 3,
                    "accepts_10bis": true,
                    "address": "fff",
                    "max_delivery_time_minutes": 55,
                    "created_at": "2018-07-15T15:05:17.588Z",
                    "updated_at": "2018-07-16T07:24:56.267Z"
                }
            ],
            filteredRestaurants: "empty"
        };
    }

    onCuisineSelected = event =>  {
        var cuisineId = event.target.value;
        console.log("cuisine id is = " + cuisineId);
        this.setState({ selected_value: cuisineId });
        const filteredRestaurants = this.state.restaurants.filter(restaurant => restaurant.cuisine_id === cuisineId);
        console.log(filteredRestaurants);
        this.setState({ filteredRestaurants: filteredRestaurants.toLocaleString() });
    };


    render() {
        const cuisines = ( //loads the cuisines list into map, then for each item
            this.state.cuisines.map((cuisine) => {
                return <MenuItem value={cuisine.id} key={cuisine.id} id={cuisine.id}>{cuisine.name}</MenuItem>
            })
        );

        return (
            <MuiThemeProvider>
                <div>
                    <InputLabel htmlFor="cuisine-list">Select Cuisine</InputLabel>
                    <Select
                            value={this.state.selected_value}
                            onChange={this.onCuisineSelected}
                            className="search-selected"
                        >
                        {cuisines} /* list of menu items */
                        </Select>
                    <p> restaurant is {this.state.filteredRestaurants}</p>

                </div>
            </MuiThemeProvider>
        );
    }

}




export default Toolbar;