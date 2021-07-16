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

    updateRating(i,e){
        this.setState({
            rating: i
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
        this.props.createReview(this.state)     
    }


    componentDidMount(){
        
    }

    render(){
        let radioButtons = []
        console.log(this.state)
        for (let i=1; i<6; i++){
                radioButtons.push(<input key={i} type="radio" className="rating-radio" 
                checked={this.state.rating === i} id={`rating-${i}`} 
                name={`new-form-rating`} value={i} onChange={(e)=>this.updateRating(i, e)}/>)
        }
        return(
            <div className="review-form">
                <div className="rating-container">
                    <span>Rating: </span>
                    {radioButtons}
                </div>
                <input type="text" placeholder="Title"  className="title" onChange={this.updateTitle}/>
                <textarea placeholder="Body" className="body" onChange={this.updateBody} ></textarea>
                <button className="form-button edit-button" onClick={this.handleSubmit}>Submit Review</button>
            </div>
        )
    }
}

export default NewReviewForm

                    