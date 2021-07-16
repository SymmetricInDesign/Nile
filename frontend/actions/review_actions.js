import * as ReviewApiUtil from "../util/review_api_util"
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS"
export const RECEIVE_REVIEW = "RECEIVE_REVIEW"
export const REMOVE_REVIEW = "REMOVE_REVIEW"


export const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    reviews: reviews
})

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review: review
    }
}
export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId: reviewId
})

export const fetchReviews = (productId) => dispatch => (
    ReviewApiUtil.fetchReviews(productId).then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (reviewId) => dispatch => (
    ReviewApiUtil.fetchReview(reviewId).then(review => dispatch(receiveReview(review)))
)

export const createReview = (review) => dispatch => (
    ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
    ReviewApiUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
)

export const deleteReview = (reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(review.id)))
)