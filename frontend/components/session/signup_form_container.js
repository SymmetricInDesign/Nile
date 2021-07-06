import {connect} from 'react-redux'
import { createNewUser } from '../../actions/session_actions'
import { withRouter } from "react-router"
import SessionForm from './session_form'

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup"
    }
}

const mDTP = (dispatch, ownProps) => {
    return {processForm: (formData) => {
        dispatch(createNewUser(formData))
    }}
}

export default withRouter(connect(mSTP, mDTP)(SessionForm))