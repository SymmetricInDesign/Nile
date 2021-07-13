import * as CartApiUtil from "../util/cart_api_util"
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS"


export const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems: cartItems
})

export const fetchCartItems = () => dispatch => (
    CartApiUtil.fetchCartItems().then(cartItems => dispatch(receiveCartItems(cartItems)))
)