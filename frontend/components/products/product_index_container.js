import ProductIndex from "./product_index"
import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router"
const queryString = require('query-string')
// import {withRouter} from "react-router-dom"

const mSTP = (state={}, ownProps) => {
    return {
        products: Object.values(state.entities.products),
    }
}

const mDTP = dispatch => ({
        requestProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mSTP, mDTP)(ProductIndex))


