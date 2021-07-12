import ProductShow from "./product_show"
import {connect} from "react-redux"
import { fetchProduct } from "../../actions/product_actions"
// import {withRouter} from "react-router-dom"

const mSTP = (state={}, ownProps) => {
    console.log(state)
    return {
        product: state.entities.products[ownProps.match.params.productId]
    }
}

const mDTP = dispatch => ({
        requestProduct: (productId) => dispatch(fetchProduct(productId))
})

export default connect(mSTP, mDTP)(ProductShow)


