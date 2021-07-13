import ProductIndex from "./product_index"
import {connect} from "react-redux"
import { fetchProducts } from "../../actions/product_actions"
import { withRouter } from "react-router"
const queryString = require('query-string')
// import {withRouter} from "react-router-dom"

const mSTP = (state={}, ownProps) => {
    // console.log(queryString.parse(ownProps.location.search))
    // let searchText = ownProps.location.search.searchText ? ownProps.location.search.searchText : -1 
    // let category = ownProps.location.search.category ? ownProps.location.search.category : 'All Departments'
    return {
        products: Object.values(state.entities.products),
        // searchText: searchText,
        // category: category
    }
}

const mDTP = dispatch => ({
        requestProducts: () => dispatch(fetchProducts())
})

export default withRouter(connect(mSTP, mDTP)(ProductIndex))


