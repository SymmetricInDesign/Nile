
import {RECEIVE_CATEGORIES} from '../actions/category_actions'

export default (state={}, action) => {
    Object.freeze(state)
    // debugger
    switch(action.type){
        case RECEIVE_CATEGORIES:
            return action.categories
        default:
            return state
    }
}