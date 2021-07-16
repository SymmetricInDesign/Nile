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
        this.props.updateReview(this.state)     
        this.props.stopEditing()
    }


    componentDidMount(){
        
    }

    render(){
        let radioButtons = []
        console.log(this.state)
        for (let i=1; i<6; i++){
                radioButtons.push(<input key={i} type="radio" className="rating-radio" 
                checked={parseInt(this.state.rating) === i} id={`rating-${i}`} 
                name={`rating-${this.props.review.id}`} value={i} onChange={(e)=>this.updateRating(i, e)}/>)
        }
        return(
            <div className="review-form">
                <div className="rating-container">

                    {radioButtons}
                </div>
                <input type="text" placeholder="Title" className="title" value={this.state.title} onChange={this.updateTitle}/>
                {/* <input type="text" placeholder="Body" className="body" value={this.state.body} onChange={this.updateBody}/> */}
                <textarea placeholder="Body" className="body" onChange={this.updateBody} defaultValue={this.state.body}></textarea>
                <button className="edit-button" onClick={this.handleSubmit}>Submit Edit</button>
            </div>
        )
    }
}

export default EditReviewForm

                    