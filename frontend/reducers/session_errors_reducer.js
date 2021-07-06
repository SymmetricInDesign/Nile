
import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from "../actions/session_actions"


export default (state=[], action) => {
    Object.freeze(state)

    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            console.log("sessions_error_reducer line 10: ", action.errors)
            return action.errors
        case RECEIVE_CURRENT_USER:
            return []
        default: 
            return state
    }
}