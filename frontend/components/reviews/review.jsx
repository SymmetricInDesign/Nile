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


    componentDidMount(){
        
    }

    render(){
        const {review} = this.props
        if (!this.state.editing){
            return(
                <div className="review">
                    <h1>{review.username}</h1>
                    <h3>{review.title}</h3>
                    <p>{review.rating}</p>
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