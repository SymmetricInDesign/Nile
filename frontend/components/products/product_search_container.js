import ProductSearch from "./product_search"
import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router"
import { updateBounds } from "../../actions/filter_actions"
const queryString = require('query-string')


const mSTP = (state={}, ownProps) => {
    const bounds = queryString.parse(ownProps.location.search)
    let searchText = bounds.searchText ? bounds.searchText : "-1"
    let category = bounds.category ? bounds.category : 'All Departments'
    return {
        bounds: state.ui.filters.bounds,
        products: Object.values(state.entities.products),
        searchText: searchText,
        category: category
    }
}

const mDTP = dispatch => ({
        requestProducts: (category, searchText) => dispatch(fetchProducts(category, searchText)),
        updateBounds: (bounds)=> dispatch(updateBounds(bounds))
})

export default withRouter(connect(mSTP, mDTP)(ProductSearch))


