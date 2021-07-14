import {RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM} from '../actions/cart_actions'

export default (state={}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_CART_ITEMS: 
            newState = Object.assign({},action.cartItems)
            return newState
        case RECEIVE_CART_ITEM:
            newState[action.cartItem.id] = action.cartItem
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId]
        default:
            return state
    }
}