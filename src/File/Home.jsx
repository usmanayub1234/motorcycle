import React from "react";
import Common from './Common';
import web from "../src/images/Fighter-150-Fit.png";
//import { NavLink } from "react-router-dom";


const Home =() =>{
    return (<>
       <Common 
       imgsrc={web}
       visit="/service"
       btname="Learn More" />
        </>)
}
export default Home;