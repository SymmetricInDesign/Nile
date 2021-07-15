import React from 'react'
import Review from './review'
class Reviews extends React.Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        this.props.requestReviews()
    }

    render(){
        const {reviews} = this.props
        if (reviews && reviews.length > 0 && reviews[0]){
            const reviewDivs = reviews.map(review=>(
                <Review key={review.id}/>
            ))
            return(
                <div className="reviews-section-container">
                    <input type="text" value="leave a review"/>
                    <div className="reviews-container">
                        {reviewDivs}
                    </div>
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