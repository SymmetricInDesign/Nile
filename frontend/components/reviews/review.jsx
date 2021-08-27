import React from 'react'
import EditReviewFormContainer from './edit_review_form_container'
class Review extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false,
        }
    }

    stopEditing(){
        this.setState({editing: false})
    }

    renderStars(n){
        let stars = []
        for (let i=0; i<n; i++){
            stars.push(<span key={i*this.props.review.id}>★{' '}</span>)
        }
        return stars
    }

    render(){
        const {review} = this.props
        if (!this.state.editing){
            const stars = this.renderStars(Math.floor(review.rating))
            return(
                <div className="review">
                    <h1>{review.username}</h1>
                    <div className="review-rating-container">
                        {stars}
                    </div>
                    <h3>{review.title}</h3>
                    <p>{review.body}</p>
                    {this.props.currentUserId == review.author_id? 
                        <div className="review-buttons-container">
                            <button className="form-button edit-button" onClick={()=>this.setState({editing: true})}>Edit</button>
                            <button className="form-button edit-button" onClick={()=>this.props.deleteReview(review.id)}>Delete</button>
                        </div>
                    :
                        null
            }
                </div>
            )
        }else{
            return(
                <EditReviewFormContainer review={review} productId={review.product_id} stopEditing={()=>this.stopEditing()}/>
            )
        }
    }
}

export default Review