import {fetchReviews, deleteReview, updateReview} from '../../actions/review_actions'
import Reviews from "./reviews"
import {connect} from "react-redux"
import { withRouter } from "react-router"
const queryString = require('query-string')

const mSTP = (state={}, ownProps) => {
    return {
        reviews: Object.values(state.entities.reviews)
    }
}

const mDTP = dispatch => ({
        requestReviews: () => dispatch(fetchReviews()),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        updateReview: (review) => dispatch(updateReview(review)),
})

export default withRouter(connect(mSTP, mDTP)(Reviews))

