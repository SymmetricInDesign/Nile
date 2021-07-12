
// import {RECEIVE_FILTERS} from '../actions/filter_actions'
import {UPDATE_BOUNDS} from '../actions/filter_actions'

export default (state={bounds: {searchText: "-1", category: "All Departments"}}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    // if (!newState.bounds) newState.bounds={searchText: "-1", category: "All Departments"}
    switch(action.type){
        case UPDATE_BOUNDS: 
            newState.bounds = action.bounds
            return newState
        default:
            return state
    }
}