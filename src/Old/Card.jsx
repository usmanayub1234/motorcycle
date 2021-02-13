import React from "react";
import Web from './images/1.jpg';
import { NavLink } from "react-router-dom";

const Card = (props) =>{

    return (<>
<div className="col-md-4 col-10 mx-auto">
<div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt="service1" />
  <div className="card-body">
    <h5 className="card-titlen font-weight-bold">{props.title}</h5>
    <p className="card-text">{props.desc}</p>
    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
 </>)
}
export default Card;