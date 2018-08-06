import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import GridLayout from "./GridLayout";
import {bindActionCreators} from "redux";
import * as Actions from "../actions";
import {connect} from 'react-redux';
import StarRating from 'react-star-rating-component';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import RateReview from "@material-ui/icons/es/Cancel";

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: [],
            filteredRestaurants: [{"id": -1, "name": "empty"}],
            has_10bis: false,
            selected_value: -1,
            rating: 0,
        };
        this.onTenBisChecked = this.onTenBisChecked.bind(this);
        this.onCuisineSelected = this.onCuisineSelected.bind(this);

    }

    onCuisineSelected = event => {
        var cuisineId = event.target.value;
        console.log("cuisine id is = " + cuisineId);
        this.setState({selected_value: cuisineId});
        const filteredRestaurants = this.props.restaurants.filter(restaurant => restaurant.cuisine_id === cuisineId);
        this.setState({filteredRestaurants: filteredRestaurants});
    };

    onTenBisChecked = () => {
        const {has_10bis} = this.state;
        this.setState({has_10bis: !has_10bis});
        let filteredRestaurants = {};
        if (has_10bis) {
             filteredRestaurants = this.props.restaurants.filter(restaurant => restaurant.accepts_10bis === true);
        } else {
             filteredRestaurants = this.props.restaurants.filter(restaurant => restaurant.accepts_10bis === false);
        }
        this.setState({filteredRestaurants: filteredRestaurants});
    };

    onStarClick = (nextValue) => {
        this.setState({rating: nextValue});
        const filteredRestaurants = this.props.restaurants.filter(restaurant => restaurant.rating >= nextValue);
        this.setState({filteredRestaurants: filteredRestaurants});
    };

    handleClickClearAll = () =>{
        this.setState({has_10bis: false});
        this.setState({selected_value: -1});
        this.setState({rating: 0});
        this.setState({filteredRestaurants: this.props.restaurants});
    }

    componentDidMount() {
        this.getCuisine();
        this.props.actions.loadRestaurants();
    }


    static getDerivedStateFromProps(nextProps, prevState){
        if ( nextProps.restaurants  && nextProps.restaurants!==prevState.restaurants) {
            return {restaurants: nextProps.restaurants, filteredRestaurants: nextProps.restaurants};
        }
        else return null;
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
                        <div className="three">
                        <div style={{marginLeft: '50px'}}>
                            <h style={{color: 'black'}}> Accepts 10Bis</h>
                            <Checkbox
                                className="tenBis-filter"
                                label="Accepts 10Bis"
                                checked={this.state.has_10bis}
                                onChange={this.onTenBisChecked}
                                labelstyle={{color: 'black'}}
                                //          iconStyle={{fill: 'rgb(233, 30, 99)'}}
                            />
                        </div>
                        </div>

                        <div className="three">

                                <div>
                                    <StarRating className="star-component"
                                                name="rating"
                                                starCount={5}
                                                value={this.state.rating}
                                                starColor={"#F7CFD3"}
                                                onStarClick={this.onStarClick}
                                                emptyStarColor="rgba(0, 0, 0, .54)"
                                    />

                            </div>
                        </div>

                        <div className="three">
                            <div style={{marginLeft: '50px'}}>
                                <IconButton aria-label="Rate" onClick={this.handleClickClearAll}>
                                    <RateReview/>
                                </IconButton>
                            </div>
                        </div>

                    </div>
                    <div style={{margintop: '50px'}}>     </div>
                        <GridLayout filteredRestaurants = {this.state.filteredRestaurants}></GridLayout>
                </div>
            </MuiThemeProvider>
        );
    }

}

const mapStateToProps = (state) => ({
    restaurants: state.visibilityFilter.restaurants,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
