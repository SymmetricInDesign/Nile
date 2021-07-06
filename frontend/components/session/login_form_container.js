import {connect} from 'react-redux'
import SessionForm from './session_form'
import {createNewSession} from "../../actions/session_actions"

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "login"
    }
}

const mDTP = (dispatch, ownProps) => {
    return {processForm: (formData) => {
        dispatch(createNewSession(formData))
    }}
}

export default connect(mSTP, mDTP)(SessionForm)