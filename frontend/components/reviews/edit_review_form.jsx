import React from 'react'
import { createReview } from '../../actions/review_actions'
class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: props.review.title,
            body: props.review.body,
            rating: props.review.rating,
            product_id: props.productId,
            id: props.review.id
        }
        this.updateRating = this.updateRating.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateRating(e){
        this.setState({
            rating: e.target.value
        })
    }

    updateTitle(e){
        this.setState({title: e.target.value})
    }

    updateBody(e){
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.updateReview(this.state)     
        this.props.stopEditing()
    }

    render(){
        // let radioButtons = []
        // for (let i=1; i<6; i++){
        //         radioButtons.push(<input key={i} type="radio" className="rating-radio" 
        //         checked={parseInt(this.state.rating) === i} id={`rating-${i}`} 
        //         name={`rating-${this.props.review.id}`} value={i} onChange={(e)=>this.updateRating(i, e)}/>)
        // }
        return(
            <div className="review-form">
                <div className="rating-container">
                    <div className="rate">
                        <input type="radio" id="star5" name="rate" value="5" onChange={this.updateRating} />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" onChange={this.updateRating} />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" onChange={this.updateRating} />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" onChange={this.updateRating} />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" onChange={this.updateRating} />
                        <label for="star1" title="text">1 star</label>
                    </div>
                </div>
                <input type="text" placeholder="Title" className="review-title review-form-input" value={this.state.title} onChange={this.updateTitle}/>
                {/* <input type="text" placeholder="Body" className="body" value={this.state.body} onChange={this.updateBody}/> */}
                <textarea placeholder="Body" className="body review-form-input" onChange={this.updateBody} defaultValue={this.state.body}></textarea>
                <button className="form-button edit-button" onClick={this.handleSubmit}>Submit Edit</button>
            </div>
        )
    }
}

export default EditReviewForm

                    