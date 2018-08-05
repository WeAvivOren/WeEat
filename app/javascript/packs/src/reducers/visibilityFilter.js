import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
			return {
                ...state,
                restaurants: action.restaurants }
        case 'set_ppl_filter':
           // var filtered = restaurants.map/filter((r) =>{ ... }
			return { restaurants: filtered }
        default:
            return state
    }
}

export default visibilityFilter