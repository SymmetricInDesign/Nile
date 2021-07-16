import {createReview} from '../../actions/review_actions'
import NewReviewForm from "./new_review_form"
import {connect} from "react-redux"
import { withRouter } from "react-router"

const mSTP = (state={}, ownProps) => {
    return {
        product: ownProps.product,
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => ({
        createReview: (review) => dispatch(createReview(review)),
})

export default withRouter(connect(mSTP, mDTP)(NewReviewForm))

