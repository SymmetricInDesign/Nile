import {RECEIVE_CART_ITEMS} from '../actions/cart_actions'

export default (state={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_CART_ITEMS: 
            newState = Object.assign({},action.cartItems)
            return newState
        default:
            return state
    }
}