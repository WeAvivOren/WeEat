import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: [
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
            restaurants: [
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
            filteredRestaurants: [{"id": -1, "name": "empty"}],
            has_10bis: false,
            selected_value: -1,
        };
        this.onTenBisChecked = this.onTenBisChecked.bind(this);
        this.onCuisineSelected = this.onCuisineSelected.bind(this);

    }

    onCuisineSelected = event => {
        var cuisineId = event.target.value;
        console.log("cuisine id is = " + cuisineId);
        this.setState({selected_value: cuisineId});
        const filteredRestaurants = this.state.restaurants.filter(restaurant => restaurant.cuisine_id === cuisineId);
        console.log(filteredRestaurants);
        this.setState({filteredRestaurants: filteredRestaurants});
    };

    onTenBisChecked = event => {
        this.setState({has_10bis: !this.state.has_10bis});

        const filteredRestaurants = this.state.restaurants.filter(restaurant => restaurant.accepts_10bis === true);
        console.log(filteredRestaurants);
        this.setState({filteredRestaurants: filteredRestaurants});
    };

    componentDidMount() {
        this.getCuisine();
        this.getRestaurants();
    }


    getRestaurants() {
        fetch('/restaurants.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => this.setState({restaurants: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }

    getCuisine() {
        fetch('/cuisines.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => this.setState({cuisines: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {

        const cuisines = ( //loads the cuisines list into map, then for each item
            this.state.cuisines.map((cuisine) => {
                return <MenuItem value={cuisine.id} key={cuisine.id} id={cuisine.id}>{cuisine.name}</MenuItem>
            })
        );

        const filteredRestaurants = ( //loads the filteredRestaurants list into map, then for each item
            this.state.filteredRestaurants.map((restaurant) => {
                return <MenuItem value={restaurant.id} key={restaurant.id}
                                 id={restaurant.id}>{restaurant.name}</MenuItem>
            })
        );

        return (
            <MuiThemeProvider>
                <div>
                    <div className="container">
                        <div className="one">
                        <div style={{marginLeft: '50px'}}>
                            <FormControl className="cusine-formControl">
                                <InputLabel htmlFor="restaurants-list"  width="200">Cuisine</InputLabel>
                                <Select
                                    width="200"
                                    value={this.state.selected_value}
                                    onChange={this.onCuisineSelected}
                                    className="cuisine-search-selected"
                                    defaultValue="-1"
                                    useDefault={true}
                                >
                                    <MenuItem value="-1" key="-1" id="-1" disabled>Cuisine</MenuItem>
                                    {cuisines} /* list of menu items */
                                </Select>
                            </FormControl>
                        </div>
                         </div>



                            <div style={{marginLeft: '50px'}}>

                            <FormControl className="cusine-formControl">
                                <InputLabel htmlFor="restaurants-list"  width="200">Restaurant</InputLabel>
                                <Select
                                    value={this.state.selected_value}
                                    onChange={this.onCuisineSelected}
                                    className="restaurants-search-selected"
                                    fullWidth={true}

                                >
                                    <MenuItem value="-1"  width="200">
                                        <em>Restaurant</em>
                                    </MenuItem>
                                    {filteredRestaurants} /* list of menu items */
                                </Select>
                            </FormControl>
                        </div>

                        <div className="three">
                        <div style={{marginLeft: '50px'}}>

                            <Checkbox
                                className="tenBis-filter"
                                label="Accepts 10Bis"
                                checked={this.state.has_10bis}
                                onChange={this.onTenBisChecked}
                                labelstyle={{color: 'white'}}
                                //          iconStyle={{fill: 'rgb(233, 30, 99)'}}
                                name="has_10bis"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

}


export default Toolbar;