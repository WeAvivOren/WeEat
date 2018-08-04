export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_BY_CUISINE: 'SHOW_BY_CUISINE',
  SHOW_HAS_TEN_BIS: 'SHOW_HAS_TEN_BIS'
}

export const setVisibilityFilter = restaurants => ({
  type: 'SET_VISIBILITY_FILTER',
  restaurants
})



  export const  getRestaurants() {
        fetch('/restaurants.json')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            }).then(data => dispatch({restaurants: data}))
            .catch(error => this.setState({error, isLoading: false}));
    }