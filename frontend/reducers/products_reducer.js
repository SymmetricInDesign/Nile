
import {RECEIVE_PRODUCTS} from '../actions/product_actions'

export default (state={}, action) => {
    Object.freeze(state)
    debugger
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.products
        default:
            return state
    }
}