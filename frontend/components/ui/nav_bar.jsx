import React from 'react'
import NavMain from './nav-main'
import CategoriesNav from './categories-nav'
import { withRouter } from "react-router"
class NavBar extends React.Component{

    componentDidMount(){
        this.props.requestCategories()
    }

    render(){
        const props = this.props
        return(
            <div className="nav-bar">
                <NavMain 
                    deleteSession       =   {props.deleteSession}
                    updateBounds        =   {props.updateBounds}
                    requestProducts     =   {props.requestProducts}  
                    requestCartItems    =   {props.requestCartItems}
                    loggedIn            =   {props.loggedIn}
                    user                =   {props.user}
                    categories          =   {props.categories}
                    cartItems           =   {props.cartItems}
                />
                <CategoriesNav
                    categories          =   {props.categories}
                />
            </div>
        )
    }
}

export default withRouter(NavBar)