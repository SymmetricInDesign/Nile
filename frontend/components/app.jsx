import React from 'react'
import {AuthRoute, ProtectedRoute} from "../util/route_util"
import ProductIndexContainer from './products/product_index_container';
import ProductShowContainer from './products/product_show_container';
import ProductSearchContainer from './products/product_search_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container"
import CartContainer from './cart/cart_container'
import {Switch, Route, withRouter} from 'react-router-dom'
import Header from './header'
import Footer from './footer'


const App = (props) => (
  <div className="app">

    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>
        <Route path="/" component={Header}></Route>
    </Switch>

    <Switch>
      <Route path="/products/search" component={ProductSearchContainer} />
      <Route exact path="/products/:productId" component={ProductShowContainer} />
      <ProtectedRoute exact path="/cart" component={CartContainer} />
      <Route exact path="/" component={ProductIndexContainer} />
    </Switch>

    {/* { props.location.pathname == "/login" || props.location.pathname == "/signup" ? 
      null
      :
      <Route path="/" component={Footer}></Route>
    } */}
    
  </div>
);

export default withRouter(App)