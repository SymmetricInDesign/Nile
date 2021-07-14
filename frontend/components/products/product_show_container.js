import ProductShow from "./product_show"
import {connect} from "react-redux"
import { fetchProduct } from "../../actions/product_actions"
import { createCartItem } from "../../actions/cart_actions"
// import {withRouter} from "react-router-dom"

const mSTP = (state={}, ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId]
    let itemInCart = false
    if (product){
        Object.values(state.entities.cartItems).forEach((cartItem) => {
            if (cartItem.product_id === product.id) itemInCart = true;   
        })
    }
    return {
        product,
        itemInCart,
    }
}

const mDTP = dispatch => ({
        requestProduct: productId => dispatch(fetchProduct(productId)),
        createCartItem: (productId, qty) => dispatch(createCartItem(productId, qty))
})

export default connect(mSTP, mDTP)(ProductShow)


