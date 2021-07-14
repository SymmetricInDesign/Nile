import {connect} from "react-redux"
import { withRouter } from "react-router"
import { removeCartItem } from "../../actions/cart_actions"
import Cart from "./cart"
const queryString = require('query-string')

const mSTP = (state={}, ownProps) => {
    return {
        cartItems: Object.values(state.entities.cartItems),
    }
}

const mDTP = dispatch => ({
        requestCartItems: () => dispatch(fetchCartItems()),
        removeCartItem: (cartItemId) => dispatch(removeCartItem(cartItemId)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
})

export default withRouter(connect(mSTP, mDTP)(Cart))

