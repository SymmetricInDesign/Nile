import {fetchReviews, deleteReview, updateReview} from '../../actions/review_actions'
import Reviews from "./reviews"
import {connect} from "react-redux"
import { withRouter } from "react-router"
const queryString = require('query-string')

const mSTP = (state={}, ownProps) => {
    return {
        product: ownProps.product,
        reviews: Object.values(state.entities.reviews),
        currentUserId: state.session.id,
    }
}

const mDTP = dispatch => ({
        requestReviews: (productId) => dispatch(fetchReviews(productId)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        updateReview: (review) => dispatch(updateReview(review)),
})

export default withRouter(connect(mSTP, mDTP)(Reviews))

