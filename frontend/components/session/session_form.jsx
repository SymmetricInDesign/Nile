import React from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router"

class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: ""
      };

      this.handleSubmit = this.handleSubmit.bind(this)
      this.updatePassword = this.updatePassword.bind(this)
      this.updateUsername = this.updateUsername.bind(this)
      this.updateEmail = this.updateEmail.bind(this)
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        
    }

    updatePassword(e){
        this.setState({password: e.target.value})
    }

    updateUsername(e){
        this.setState({username: e.target.value})
    }

    updateEmail(e){
        this.setState({email: e.target.value})
    }

    render(){
        const errorLis = this.props.errors.map(error=>(<li>{error}</li>))
        return (
            <div className="session-page-container">
                <div className="session-container">
                    <Link className="session-logo" to="/"><img src={window.whiteLogoImgURL} alt="logo"/></Link>
                    {this.props.formType === "signup" ?
                    <div className="session-form-modal">
                        <h2 className="auth-header">Sign Up</h2>
                        <form className="session-form">
                            <p>Email</p>
                            <input className="auth-input" type="text" value={this.state.email} onChange={this.updateEmail} autocomplete="new-password"/>
                            <p>Username</p>
                            <input className="auth-input" type="text" value={this.state.username} onChange={this.updateUsername} autocomplete="new-password"/>
                            <p>Password</p>
                            <input className="auth-input" type="password" value={this.state.password} onChange={this.updatePassword} autocomplete="new-password"/>
                            <button className="form-button" onClick={this.handleSubmit}>Sign Up</button>
                        </form>
                        <div>
                            <hr/>
                            <div className="auth-footer auth-footer-login">
                                <p>Already have an account?</p>
                                <Link to="/login">Sign In</Link>
                            </div>
                        </div>          
                    </div>
                    :
                    <>
                        <div className="session-form-modal login-modal">
                            <h2 className="auth-header">Log In</h2>
                            <form className="session-form">
                                <p>Username</p>
                                <input className="auth-input" type="text" value={this.state.username} onChange={this.updateUsername}/>
                                <p>Password</p>
                                <input className="auth-input" type="password" value={this.state.password} onChange={this.updatePassword}/>
                                <button className="form-button" onClick={this.handleSubmit}>Log In</button>
                            </form>
                        </div>
                        <div className="auth-footer auth-footer-signup">
                            <hr className="signup-hr"/>
                            <p>New to Nile?</p>
                            <hr className="signup-hr"/>
                            <Link to="/signup">Sign Up Now</Link>
                        </div>
                    </>
                    }
                    
                </div>
                <hr className="page-footer-hr"/>
                <div className="session-footer-area">
                </div>
            </div>
            
        )
    }


    //...
}

export default withRouter(SessionForm)