
// import {RECEIVE_FILTERS} from '../actions/filter_actions'
import {UPDATE_BOUNDS} from '../actions/filter_actions'

export default (state={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        // case RECEIVE_FILTERS:
        //     return action.filters
        case UPDATE_BOUNDS: 
            newState[bounds] = action.bounds
            return newState
        default:
            return state
    }
}