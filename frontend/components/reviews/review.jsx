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
                    <h2>{review.title}</h2>
                    <h2>{review.rating}</h2>
                    <h2>{review.body}</h2>
                    <button className="edit-button" onClick={()=>this.setState({editing: true})}>Edit</button>
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