import {updateReview} from '../../actions/review_actions'
import EditReviewForm from "./edit_review_form"
import {connect} from "react-redux"
import { withRouter } from "react-router"

const mSTP = (state={}, ownProps) => {
    return {
        review: ownProps.review,
        productId: ownProps.productId,
        currentUserId: state.session.id,
        stopEditing: ownProps.stopEditing
    }
}

const mDTP = dispatch => ({
        updateReview: (review) => dispatch(updateReview(review)),
})

export default withRouter(connect(mSTP, mDTP)(EditReviewForm))

