import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import RestaurantList from '../components/RestaurantList'
import { VisibilityFilters } from '../actions'
import {store} from '../../hello_react';

const getVisibleRestaurant = (restaurant, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return restaurant
    case VisibilityFilters.SHOW_BY_CUISINE:
      return restaurant.filter(r => r.cuisine)
    case VisibilityFilters.SHOW_HAS_TEN_BIS:
      return restaurant.filter(t => r.tenBis)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


