import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router"
const queryString = require('query-string')
class NavMain extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchText: "",
            category: "All Departments"
        }
        this.updateCategory = this.updateCategory.bind(this)
        this.updateSearchText = this.updateSearchText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkForEnter = this.checkForEnter.bind(this)
    }

    componentDidMount(){
        this.props.requestCartItems()
    }

    updateCategory(e){
        this.setState({category: e.target.value})
    }
    updateSearchText(e){
        this.setState({searchText: e.target.value})
    }

    checkForEnter(e){
        if (e.charCode === 13){
            this.searchButton.click()
        }
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        const {cartItems} = this.props

        const categoryOptions = this.props.categories.map(category=>(
            <option key={category.id} value={category.name}>{category.name[0].toUpperCase() + category.name.slice(1)}</option>
        ))

        categoryOptions.unshift(<option key={-10} value="All Departments">All Departments</option>)
        let cartQuantity = 0
        
        cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity
        })

        return(
                <div className="nav-main">
                    <div id="logo">
                        <Link className="nav-main-item" to="/" replace><img src={window.logoImgURL} alt="logo"/></Link>
                    </div>
                    <div className="search">
                        <div className="search-categories-container">
                            <select 
                                name="category" 
                                id="category-select" 
                                value={this.state.category}
                                onChange={this.updateCategory}
                                >
                                {categoryOptions}
                            </select>
                        </div>
                        <input type="text" onChange={this.updateSearchText} onKeyPress={this.checkForEnter}/>
                        <Link to={{
                            pathname: '/products/search',
                            search: queryString.stringify(this.state)
                            }} 
                            className="search-icon-container" replace ref={node => this.searchButton = node}>
                            <i className="fas fa-search"></i>
                        </Link>
                    </div>

                    {this.props.loggedIn ?
                        <div className="auth-route-container">
                            <div onClick={this.props.deleteSession} className="nav-main-item">
                                <p>Hello, {this.props.user.username}</p>
                                <p>Logout</p>
                            </div>
                            <Link to="/cart" className="nav-main-item">
                                {cartQuantity < 100 ?
                                    <p className="cart-quantity">{cartQuantity}</p>
                                :
                                    <p className="cart-quantity cart-quantity-small">99+</p>
                                }
                                <img id="cart-img" src={window.cartImgURL} alt="cart" />
                            </Link>
                        </div>
                    :
                        <div className="auth-route-container">
                            <Link className="auth-nav-item" to="/signup"><p>Sign Up</p></Link>
                            <Link className="auth-nav-item" to="/login"><p>Log In</p></Link>
                        </div>
                    }
                    
                </div>
        )
    }
}

export default withRouter(NavMain)

