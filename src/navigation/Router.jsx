import Logo from '../images/logo.png';
import "../App.css";
 import history from '../classes/history';
 import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import '../css/navbar.css';
//  import MobIcon from '../images/image.png'; 

import menuLogo from "../images/logo1.png";

const Header = ({ history }) => (

<div className= "container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" onClick={()=> history.push('/deploy/')}>
<img src={Logo} alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a onClick={()=> history.push('/deploy/')} className="nav-link">Home</a>
        </li>
       
        <li className="nav-item dropdown megamenu"><a id="megamneu" href="" data-toggle="dropdown" aria-haspopup="true" 
      aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase ">Models</a>
        <div aria-labelledby="megamneu" className="dropdown-menu border-3 p-0 m-0 animate slideIn">
          <div className="container-fluid">
            <div className="row megas">
              <div className="col-12">
                <div className="p-4">
                  <div className="row">
                    <div className="col-lg-2 mb-4">
                    
                      <ul className="list-unstyled">
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/fighter')} className="nav-link text-small pb-0" ><img src={menuLogo} alt="logo" />
                      </a></li>
                      <p>Fighter 150cc</p>
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/fighter')} className="nav-link text-small pb-0"><img src={menuLogo} alt="logo" /></a></li>
                      <p>Fighter 150cc</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      <ul className="list-unstyled">
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr70/')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 70cc HD</p>
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr70/')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 70cc JAzba</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                   
                      <ul className="list-unstyled">
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr100')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 100cc</p>
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr100')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 100cc</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
              
                      <ul className="list-unstyled">
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr125/')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 125cc</p>
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr125/')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 125cc </p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
         
                      <ul className="list-unstyled">
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr100/')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 100cc</p>
                      <li className="nav-item"><a onClick={()=> history.push('/deploy/cr100/')} className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>CR 100cc</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>Loader</p>
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>Electric Loader</p>
                      </ul>
                    </div> 
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </li>

        
        <li className="nav-item">
          <a onClick={()=> history.push('/deploy/about/')}  className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a onClick={()=> history.push('/deploy/contact/')}  className="nav-link" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
</div>
</div>

  
);
export default withRouter(Header);






// className Navigation extends Component{

//  HomeButton = () => {
//     history.push({pathname:'/about'});

//   }

//  contactButton = () => {
// history.push({pathname:'/contact'});
//   }

//   bikesbutton = () => {
//  history.push({pathname:'/fighter'});
//   }


//     render(){
//   return (
//     <div classNameName="Header">
//       <p><img src={Logo} classNameName="App-logo" alt="logo" /></p>

//       <div>
//         <nav>
//           <ul>
//             <li>
//               <div>Home</div>
//             </li> 
//             <li>
//               <div onClick={ ()=> history.push('/about')}>About</div>
//             </li>
//             <li>
//               <div onClick={this.contactButton}>Contact</div>
//             </li>
//             <li>
//               <div onClick={this.bikesbutton}>Fighter</div>

//             </li>
//           </ul>
//         </nav>


//       </div>



//     </div>
//   );
// }
// }

// export default withRouter(Navigation);


