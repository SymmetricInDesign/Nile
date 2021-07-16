import React from 'react'
import Review from './review'
class Reviews extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.requestReviews(this.props.product.id)
    }

    render(){
        const {reviews} = this.props
        if (reviews && reviews.length > 0 && reviews[0]){
            const reviewDivs = reviews.map(review=>(
                <Review 
                    key={review.id}
                    review={review}
                    currentUserId={this.props.currentUserId}
                    deleteReview={this.props.deleteReview}
                />
            ))
            return(
                    <div className="reviews-container">
                        {reviewDivs}
                    </div>
            )
        }else{
            return (
                <h2>No Reviews to Display</h2>
            )
        }
    }
}

export default Reviews