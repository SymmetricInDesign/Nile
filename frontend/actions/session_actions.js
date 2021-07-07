import {signup, login, logout} from "../util/session_api_util"
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

export const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) => {
    // debugger
    return {type: RECEIVE_SESSION_ERRORS,
    errors: errors}
}

export const createNewUser = formUser => dispatch => signup(formUser)
    .then(user => (
        dispatch(receiveCurrentUser(user))
      ), err => (
        dispatch(receiveErrors(err.responseJSON))
      ))

export const createNewSession = formUser => dispatch => login(formUser)
    .then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))

export const deleteSession = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()))