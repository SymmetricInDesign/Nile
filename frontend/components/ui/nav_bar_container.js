import NavBar from "./nav_bar"
import {connect} from "react-redux"
import {fetchCategories} from '../../actions/category_actions'

const mSTP = (state={}) => ({
    // console.log(state)
    // return {categories: Object.values(state.entities.categories)}
})

const mDTP = dispatch => ({
        // requestCategories: () => dispatch(fetchCategories())
})

export default connect(mSTP, mDTP)(NavBar)