import {connect} from "react-redux"
import { withRouter } from "react-router"
import Cart from "./cart"
const queryString = require('query-string')

const mSTP = (state={}, ownProps) => {
    return {
        cartItems: Object.values(state.entities.cartItems),
    }
}

const mDTP = dispatch => ({
        requestCartItems: () => dispatch(fetchCartItems())
})

export default withRouter(connect(mSTP, mDTP)(Cart))

