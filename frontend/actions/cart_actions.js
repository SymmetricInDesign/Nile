import * as CartApiUtil from "../util/cart_api_util"
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS"
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"


export const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    cartItems: cartItems
})

export const receiveCartItem = (cartItem) => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem: cartItem
    }
}
export const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    cartItemId: cartItemId
})

export const fetchCartItems = () => dispatch => (
    CartApiUtil.fetchCartItems().then(cartItems => dispatch(receiveCartItems(cartItems)))
)

export const fetchCartItem = (cartItemId) => dispatch => (
    CartApiUtil.fetchCartItem(cartItemId).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const createCartItem = (productId, qty) => dispatch => (
    CartApiUtil.createCartItem(productId, qty).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const updateCartItem = (cartItem) => dispatch => (
    CartApiUtil.updateCartItem(cartItem).then(cartItem => dispatch(receiveCartItem(cartItem)))
)

export const deleteCartItem = (cartItemId) => dispatch => (
    CartApiUtil.deleteCartItem(cartItemId).then(cartItem => dispatch(removeCartItem(cartItem.id)))
)