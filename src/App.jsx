// import ReactDOM from 'react-dom';
// import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Navbar from "./Navbar";
// import Footer from './footer';
// import Fighter from './fighter';


// import { BrowserRouter ,Switch, Route, Redirect } from 'react-router-dom';








import React, { Component } from 'react';
import history from "./classes/history";
import {BrowserRouter as Router} from "react-router-dom";

import './css/navbar.css';
import RouterNav from "./navigation/RoutersNav";
import Footer from './classes/footer';
import ScrollToTopBtn from "./classes/scrolltop"; 

 class App extends Component {
  render() {
   return (
 
        <Router  history={history} >
        <div>
        <div ref={this.myRef}></div>
    
        <RouterNav />

        <ScrollToTopBtn /> 
        <Footer />


    </div>
  </Router>
);

    }
}

export default App;





// const App = () =>{
//     return (
//     <> 
//     <Navbar />
//         <BrowserRouter>
//         <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Route exact path="/fighter" component={Fighter} />

//         <Redirect to = "/" />
//         </Switch>
//         <Footer />
//         </BrowserRouter>

//         </>);
// }
// export default App;