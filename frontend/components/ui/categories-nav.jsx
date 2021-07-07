import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
class CategoriesNav extends React.Component{

    componentDidMount(){
    }

    render(){
        const categoryLinks = this.props.categories.map(category=>(
            <Link key={category.id} to={`/categories/${category.id}`} className='categories-nav-item'><p>{category.name[0].toUpperCase() + category.name.slice(1)}</p></Link>
        ))
        return(
            <div className="categories-nav">
                {categoryLinks}
            </div>
        )
    }
}

export default CategoriesNav