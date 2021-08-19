import {connect} from "react-redux"
import { withRouter } from "react-router"
import { deleteCartItem, updateCartItem } from "../../actions/cart_actions"
import CartItem from "./cart_item"

const mSTP = (state={}, ownProps) => {
    return {
        product: ownProps.product,
        cartItem: ownProps.cartItem,
    }
}

const mDTP = dispatch => ({
        removeCartItem: (cartItemId) => dispatch(deleteCartItem(cartItemId)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
})

export default withRouter(connect(mSTP, mDTP)(CartItem))
