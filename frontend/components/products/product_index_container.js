import ProductIndex from "./product_index"
import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions"
// import {withRouter} from "react-router-dom"

const mSTP = (state={}) => {
    console.log(state)
    return {products: Object.values(state.entities.products)}
}

const mDTP = dispatch => ({
        requestProducts: () => dispatch(fetchProducts())
})

export default connect(mSTP, mDTP)(ProductIndex)


