
import {connect} from "react-redux"
import { withRouter } from "react-router"
import { deleteCartItem, fetchCartItems } from "../../actions/cart_actions"
import { fetchProducts } from "../../actions/product_actions"
import Cart from "./cart"
const queryString = require('query-string')

const mSTP = (state={}, ownProps) => {
    const cartItems = Object.values(state.entities.cartItems)
    let cartItemProducts = {}
    cartItems.forEach(cartItem => {
        cartItemProducts[cartItem.id] = state.entities.products[cartItem.product_id]
    })
    return {
        cartItems,
        cartItemProducts
    }
}

const mDTP = dispatch => ({
        requestCartItems: () => dispatch(fetchCartItems()),
        removeCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
        requestProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mSTP, mDTP)(Cart))

