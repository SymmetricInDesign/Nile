import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router"
const queryString = require('query-string')
class NavMain extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchText: "",
            searchCategory: "All Departments"
        }
        this.updateCategory = this.updateCategory.bind(this)
        this.updateSearchText = this.updateSearchText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkForEnter = this.checkForEnter.bind(this)
    }

    componentDidMount(){
        // this.props.requestCategories()
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
          debugger
          this.props.requestProducts(this.state.searchCategory, this.state.searchText)
        }
    }


    updateCategory(e){
        this.setState({searchCategory: e.target.value})
    }
    updateSearchText(e){
        this.setState({searchText: e.target.value})
    }

    checkForEnter(e){
        // debugger
        if (e.charCode === 13){
            this.searchButton.click()
        }
    }

    handleSubmit(e){
        e.preventDefault()
    }

    render(){
        // console.log(this.props)
        const categoryOptions = this.props.categories.map(category=>(
            <option key={category.id} value={category.name}>{category.name[0].toUpperCase() + category.name.slice(1)}</option>
        ))
        categoryOptions.unshift(<option key={-10} value="All Departments">All Departments</option>)

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
                                value={this.state.searchCategory}
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
                                <p id="cart-quantity">4</p>
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


    // handleSearch(e){
    //     e.preventDefault()
        // let searchTerm
        // searchTerm = this.state.searchText == ''
        //     ? -1
        //     : this.state.searchText;
        // const bounds = {
        //     searchText: searchTerm,
        //     category: this.state.searchCategory
        // }
        // this.props.updateBounds(bounds)
        // this.props.requestProducts(this.state.searchCategory, searchTerm)
        // this.props.history.push({
        //     pathname: '/products',
        //     state: { searchTerm: searchTerm,
        //     category: this.state.searchCategory }
        // });
    // }