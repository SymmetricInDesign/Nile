import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
class CategoriesNav extends React.Component{

    componentDidMount(){
        // this.props.requestCategories()
    }

    render(){
        return(
            <div className="categories-nav">
                <Link className='categories-nav-item'>Category</Link>
            </div>
        )
    }
}

export default CategoriesNav