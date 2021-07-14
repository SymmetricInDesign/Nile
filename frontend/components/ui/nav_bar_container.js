import NavBar from "./nav_bar"
import {connect} from "react-redux"
// import { withRouter } from "react-router"
import {fetchCategories} from '../../actions/category_actions'
import {fetchProducts} from '../../actions/product_actions'
import { deleteSession } from "../../actions/session_actions"
import { updateBounds } from "../../actions/filter_actions"
import { fetchCartItems } from "../../actions/cart_actions"

const mSTP = (state={}) => ({
    loggedIn: Boolean(state.session.id != null),
    user: state.entities.users[state.session.id],
    categories: Object.values(state.entities.categories),
    cartItems: Object.values(state.entities.cartItems)
})

const mDTP = dispatch => ({
        requestCategories: () => dispatch(fetchCategories()),
        requestProducts: (category, searchText) => dispatch(fetchProducts(category, searchText)),
        deleteSession: ()=> dispatch(deleteSession()),
        updateBounds: (bounds) => dispatch(updateBounds(bounds)),
        requestCartItems: ()=> dispatch(fetchCartItems()),
})

export default connect(mSTP, mDTP)(NavBar)