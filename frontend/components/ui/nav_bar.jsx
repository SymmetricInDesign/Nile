import React from 'react'
import NavMain from './nav-main'
import CategoriesNav from './categories-nav'
import { withRouter } from "react-router"
class NavBar extends React.Component{

    componentDidMount(){
        this.props.requestCategories()
    }

    render(){
        return(
            <div className="nav-bar">
                <NavMain 
                    deleteSession={this.props.deleteSession} 
                    loggedIn = {this.props.loggedIn}
                    user = {this.props.user}
                    categories={this.props.categories}
                />
                <CategoriesNav
                    categories={this.props.categories}
                />
            </div>
        )
    }
}

export default withRouter(NavBar)