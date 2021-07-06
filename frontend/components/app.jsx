import React from 'react'
import {AuthRoute} from "../util/route_util"
import ProductIndexContainer from './products/product_index_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container"
import {Switch, Route} from 'react-router-dom'
import NavBarContainer from './ui/nav_bar_container';

const App = () => (
  <div className="app">
    <header>
      <NavBarContainer/>
    </header>
    <Route exact path="/" component={ProductIndexContainer} />
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
    </Switch>

  </div>
);

export default App