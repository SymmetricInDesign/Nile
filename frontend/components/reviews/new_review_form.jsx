import React from 'react'
import { createReview } from '../../actions/review_actions'
class NewReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title: "",
            body: "",
            rating: 3,
            product_id: props.product.id
        }
        this.updateRating = this.updateRating.bind(this)
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // updateRating(i,e){
    //     this.setState({
    //         rating: i
    //     })
    // }

    updateTitle(e){
        this.setState({title: e.target.value})
    }

    updateBody(e){
        this.setState({body: e.target.value})
    }

    updateRating(e){
        console.log(e.target.value)
        this.setState({rating: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault() 
        this.props.createReview(this.state)     
    }

    render(){
        // let radioButtons = []
        // for (let i=1; i<6; i++){
        //         radioButtons.push(<input key={i} type="radio" className="rating-radio" 
        //         checked={this.state.rating === i} id={`rating-${i}`} 
        //         name={`new-form-rating`} value={i} onChange={(e)=>this.updateRating(i, e)}/>)
        // }
        return(
            <div className="review-form">
                 <div className="rating-container">
                    <div className="rate">
                        <input type="radio" id="star5" name="rate" value="5" onChange={this.updateRating} checked={this.state.rating == 5}/>
                        <label htmlFor="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" onChange={this.updateRating} checked={this.state.rating == 4}/>
                        <label htmlFor="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" onChange={this.updateRating} checked={this.state.rating == 3}/>
                        <label htmlFor="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" onChange={this.updateRating} checked={this.state.rating == 2}/>
                        <label htmlFor="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" onChange={this.updateRating} checked={this.state.rating == 1}/>
                        <label htmlFor="star1" title="text">1 star</label>
                    </div>
                </div>
                <input type="text" placeholder="Title"  className="review-title review-form-input" onChange={this.updateTitle}/>
                <textarea placeholder="Body" className="body review-form-input" onChange={this.updateBody} ></textarea>
                <button className="form-button edit-button" onClick={this.handleSubmit}>Submit Review</button>
            </div>
        )
    }
}

export default NewReviewForm

                    