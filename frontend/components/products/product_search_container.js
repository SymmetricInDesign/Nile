import ProductSearch from "./product_search"
import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router"
import { updateBounds } from "../../actions/filter_actions"
const queryString = require('query-string')
// import {withRouter} from "react-router-dom"

const mSTP = (state={}, ownProps) => {
    // console.log(queryString.parse(ownProps.location.search))
    const bounds = queryString.parse(ownProps.location.search)
    let searchText = bounds.searchText ? bounds.searchText : "-1"
    let searchCategory = bounds.searchCategory ? bounds.searchCategory : 'All Departments'
    // debugger
    return {
        bounds: state.ui.filters.bounds,
        products: Object.values(state.entities.products),
        searchText: searchText,
        searchCategory: searchCategory
    }
}

const mDTP = dispatch => ({
        requestProducts: (searchCategory, searchText) => dispatch(fetchProducts(searchCategory, searchText)),
        updateBounds: (bounds)=> dispatch(updateBounds(bounds))
})

export default withRouter(connect(mSTP, mDTP)(ProductSearch))


