import NavBar from "./nav_bar"
import {connect} from "react-redux"
// import { withRouter } from "react-router"
import {fetchCategories} from '../../actions/category_actions'
import { deleteSession } from "../../actions/session_actions"

const mSTP = (state={}) => ({
    loggedIn: Boolean(state.session.id != null)
})

const mDTP = dispatch => ({
        // requestCategories: () => dispatch(fetchCategories())
        deleteSession: ()=> dispatch(deleteSession())
})

export default connect(mSTP, mDTP)(NavBar)