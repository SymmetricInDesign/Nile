import * as ReviewApiUtil from "../util/review_api_util"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"


export const receiveCartItems = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews: reviews
})

export const receivereview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review: review
    }
}
export const removereview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId: reviewId
})

export const fetchReviews = () => dispatch => (
    ReviewApiUtil.fetchReviews().then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (reviewId) => dispatch => (
    ReviewApiUtil.fetchReview(reviewId).then(review => dispatch(receiveReview(review)))
)

export const createReview = (productId, qty) => dispatch => (
    ReviewApiUtil.createReview(productId, qty).then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
    ReviewApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(review.id)))
)