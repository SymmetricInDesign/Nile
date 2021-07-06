import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router"
class NavMain extends React.Component{

    componentDidMount(){
        // this.props.requestCategories()
    }

    render(){
        return(
                <div className="nav-main">
                    <div id="logo">
                        <Link className="nav-main-item" to="/"><img src={window.logoImgURL} alt="logo"/></Link>
                    </div>
                    <div className="search">
                        <div className="search-categories-container"></div>
                        <input type="text" placeholder="search"/>  
                        <div className="search-icon-container">
                            <i class="fas fa-search"></i>
                        </div>
                    </div>
                    {this.props.loggedIn ?
                        <div className="auth-route-container">
                            <div onClick={this.props.deleteSession} className="nav-main-item">
                                <p>Logout</p>
                            </div>
                            <Link to="/cart" className="nav-main-item">
                                <img id="cart-img" src={window.cartImgURL} alt="cart" />
                            </Link>
                        </div>
                    :
                        <div className="auth-route-container">
                            <Link className="nav-main-item" to="/signup"><p>Sign Up</p></Link>
                            <Link className="nav-main-item" to="/login"><p>Log In</p></Link>
                        </div>
                    }
                </div>
        )
    }
}

export default withRouter(NavMain)