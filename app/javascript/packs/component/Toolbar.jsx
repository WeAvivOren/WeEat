import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import GridLayout from "./GridLayout";


class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: [],
            restaurants: [],
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
            }).then(data => this.setState({restaurants: data, filteredRestaurants: data}))
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

                        <GridLayout filteredRestaurants = {this.state.filteredRestaurants}
                    ></GridLayout>

                </div>
            </MuiThemeProvider>
        );
    }

}


export default Toolbar;