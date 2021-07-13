import {connect} from "react-redux"
import { withRouter } from "react-router"
const queryString = require('query-string')

const mSTP = (state={}, ownProps) => {
    return {
        cartItems: Object.values(state.entities.cartItems),
    }
}

const mDTP = dispatch => ({
        requestProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mSTP, mDTP)(ProductIndex))

