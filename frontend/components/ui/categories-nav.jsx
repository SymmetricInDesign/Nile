import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
class CategoriesNav extends React.Component{

    componentDidMount(){
        // this.props.requestCategories()
    }

    render(){
        return(
            <div className="categories-nav">
                <button>Category</button>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        )
    }
}

export default CategoriesNav