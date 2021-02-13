
import  "../App.css";
import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import { withRouter } from "react-router-dom";
import history from "../classes/history";

import About from "../classes/about";
import Contact from "../classes/contact";
import Fighter from "../classes/fighter";
import Home from '../classes/home';
import Svntycc from '../classes/cr70';
import OnetoFivecc from '../classes/cr125';
import OneHundred  from "../classes/cr100";
import Navigation from "../navigation/Router";


 class RouterNav extends Component {
    render() {
        return (
<>

<Router  history={history} >
<div ref={this.myRef}></div>
<Navigation/>
<Switch>
          {/* <Route exact path="/deploy" /> */}
          <Route path="/deploy/about/" component={About} />
          <Route path="/deploy/contact/" component={Contact} />
          <Route path="/deploy/fighter/" component={Fighter} />
          <Route path="/deploy/cr70/" component={Svntycc} />
          <Route path="/deploy/cr125/" component={OnetoFivecc} />
          <Route path="/deploy/cr100/" component={OneHundred} />
        </Switch>

        <Route path="/deploy/" render = { ( props ) => ( props.location.pathname == "/deploy/") && <Home btn="Read More" shop="Buy Now"  history /> } />
   


 
  </Router>

 
</>

        );
    }
 }

export default RouterNav;






