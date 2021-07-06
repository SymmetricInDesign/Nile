import React from 'react'
import NavMain from './nav-main'
import CategoriesNav from './categories-nav'
class NavBar extends React.Component{

    componentDidMount(){
        // this.props.requestCategories()
    }

    render(){
        return(
            <div className="nav-bar">
                <NavMain/>
                <CategoriesNav/>
            </div>
        )
    }
}

export default NavBar