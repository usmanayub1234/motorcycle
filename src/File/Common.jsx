import React from "react";
import Banner from "../src/images/banner.jpg";
import Banner1 from "../src/images/banner1.jpg";
import Banner3 from "../src/images/banner3.jpg";
import { NavLink } from "react-router-dom";

const common =(props) =>{
    return (<>

{/* <div className= "container-fluid d-flex align-items-center">
<div className="row">
<div className="col-12">
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Banner1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Banner3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
</div>
</div> */}

 <section id="header" className="header-banner d-flex align-items-center">
   <div className= "container-fluid" >
<div className="row">
<div className="col-10 mx-auto">
<div className="row">

<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
{/* <h1>{props.name}
<strong className="brand-name"> INTRODUCING FIT 150
TRUE DEFINITION OF SPEED</strong></h1>
<h2 className="my-3">FIT 150 is manufactured with keeping one thing in focus, true performance. The latest entrant in the FIT series is best qualified for your needs. 
The design of the motorcycle is carefully engineered to craft through air pressure and produce optimum torque for maximum results.</h2>
<div className="mt-3"> <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink> </div> */}
</div>
<div className="col-lg-6  order-lg-2 header-img">
<h1>{props.name}
<strong className="brand-name"> INTRODUCING FIT 150
TRUE DEFINITION OF SPEED</strong></h1>
<p className="my-3">FIT 150 is manufactured with keeping one thing in focus, true performance. The latest entrant in the FIT series is best qualified for your needs. 
The design of the motorcycle is carefully engineered to craft through air pressure and produce optimum torque for maximum results.</p>
<div className="mt-3"> <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink> </div>
    {/* <img src={props.imgsrc} className="img-fluide animated" alt="home-img" /> */}
</div> 

</div>
</div>
</div>
</div>
</section>

<section id="header" className="d-flex align-items-center">
   <div className= "container-fluid" >
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<h1>{props.name}
<strong className="brand-name"> INTRODUCING FIT 150
TRUE DEFINITION OF SPEED</strong></h1>
<p className="my-3">FIT 150 is manufactured with keeping one thing in focus, true performance. 
The latest entrant in the FIT series is best qualified for your needs. 
The design of the motorcycle is carefully engineered to craft through air pressure and produce optimum torque for maximum results.</p>
<div className="mt-3"> <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink> </div>
</div>
<div className="col-lg-6 order-1 order-lg-2 header-img">
    <img src={props.imgsrc} className="img-fluid animated" alt="home-img" />
</div>
</div>
</div>
</div>
</div>
</section>
        
        
        </>)
}
export default common;