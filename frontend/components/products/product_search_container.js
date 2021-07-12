import ProductIndex from "./product_index"
import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router"
import { updateBounds } from "../../actions/filter_actions"
const queryString = require('query-string')
// import {withRouter} from "react-router-dom"

const mSTP = (state={}, ownProps) => {
    console.log(state.ui.filters.bounds)
    let searchText = state.ui.filters.bounds.searchText ? state.ui.filters.bounds.searchText : -1 
    let searchCategory = state.ui.filters.bounds.searchCategory ? state.ui.filters.bounds.searchCategory : 'All Departments'
    debugger
    return {
        products: Object.values(state.entities.products),
        searchText: searchText,
        searchCategory: searchCategory
    }
}

const mDTP = dispatch => ({
        requestProducts: (searchCategory, searchText) => dispatch(fetchProducts(searchCategory, searchText)),
        updateBounds: (bounds)=> dispatch(updateBounds(bounds))
})

export default withRouter(connect(mSTP, mDTP)(ProductIndex))


