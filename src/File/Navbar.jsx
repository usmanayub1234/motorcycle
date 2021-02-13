import React from "react";
import Logo from "../src/images/logo.png";
import menuLogo from "../src/images/logo1.png";
//import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (<>
<div className= "container-fluid nav_bg">
<div className="row">
<div className="col-10 mx-auto">

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href ="/">
<img src={Logo} alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
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
                      {/* <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6> */}
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="/fighter" className="nav-link text-small pb-0" ><img src={menuLogo} alt="logo" />
                      </a></li>
                      <p>Fighter 150cc</p>
                      <li className="nav-item"><a href="/tab" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>Tabs Example</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      {/* <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6> */}
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="/" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      {/* <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6> */}
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      {/* <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6> */}
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      {/* <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6> */}
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-xs-4 mb-4">
                      {/* <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6> */}
                      <ul className="list-unstyled">
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      <li className="nav-item"><a href="" className="nav-link text-small pb-0 "><img src={menuLogo} alt="logo" /></a></li>
                      <p>MegaMenu heading</p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-5 col-xl-4 px-0 d-none d-lg-block menu-img"></div> */}
            </div>
          </div>
        </div>
      </li>

        
        <li className="nav-item">
          <a href="/about"  className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact"  className="nav-link" >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div>
</div>
</div>

        </>
        )
}
export default Navbar;