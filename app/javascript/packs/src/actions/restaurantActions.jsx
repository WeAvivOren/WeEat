
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const setVisibilityFilter = restaurants => ({
    type: 'SET_VISIBILITY_FILTER',
    restaurants
})


export const loadRestaurants = () => {
    return (dispatch, getState) => {
        fetch('/restaurants.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => dispatch(setVisibilityFilter( data)))
            .catch(error => this.setState({error, isLoading: false}));
    };
};

