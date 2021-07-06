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
            <div className="session-form-container">
                <ul>{errorLis}</ul>
                { this.props.formType === "signup" ? 
                    <div className="auth-header">
                        <h2>Sign Up</h2><Link to="/login">Log In</Link>
                    </div> 
                    : 
                    <div className="auth-header">
                        <h2>Log In</h2><Link to="/signup">Sign Up</Link>
                    </div>
                }

                <form className="session-form">
                    <label className="auth-label">Username: 
                        <input className="auth-input" type="text" value={this.state.username} onChange={this.updateUsername}/>
                    </label>
                    <label className="auth-label">Email: 
                        <input className="auth-input" type="text" value={this.state.email} onChange={this.updateEmail}/>
                    </label>
                    <label className="auth-label">Password: 
                        <input className="auth-input" type="password" value={this.state.password} onChange={this.updatePassword}/>
                    </label >
                    <button className="form-button" onClick={this.handleSubmit}>{this.props.formType === "signup" ? "Sign Up" : "Log In"}</button>
                </form>
            </div>
        )
    }


    //...
}

export default withRouter(SessionForm)