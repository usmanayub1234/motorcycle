import React, { Component } from "react";
import tab1 from "../src/images/Diavel-1260-S-MY19-Motore-02-Carousel-Img-677x740.jpg";
import tab2 from "../src/images/Diavel-1260-S-MY19-Dettagli-02-Carousel-Img-677x740.jpg";
import tab3 from "../src/images/Diavel-1260-01-carousel-imgtext-677x740.jpg";
import tab4 from "../src/images/Diavel-1260-Red-01-Design-Carosello-677x740.jpg";
import section4 from "../src/images/Diavel-NY-01-banner-Wide-663x249.jpg";
import slider1 from "../src/images/slider1.jpg";
import slider2 from "../src/images/slider2.jpg";
import slider3 from "../src/images/slider3.jpg";
import slider4 from "../src/images/slider4.jpg";
import slider5 from "../src/images/slider5.jpg";
import slider6 from "../src/images/slider6.jpg";
import slider7 from "../src/images/slider7.jpg";
import slider8 from "../src/images/slider8.jpg";
import { NavLink } from "react-router-dom";


const Fighter = () =>{

return (<>

<section id="fighterpage" className="header-banner d-flex align-items-center">
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
<div className="col-lg-6  order-lg-2 fighter-css mt-25">
<h3>FIT 150 </h3>
<h1 className="my-3">Fresh vibes. Sporty soul.</h1>
<div className="mt-3"> <NavLink to="/" className="readmore">Read More</NavLink> </div>
</div> 
</div>
</div>
</div>
</div>
</section>

<section className="wrap">
<div className= "container">  
<div className="col-12 mx-auto">
<div className="row bg-infos">
<div className="model col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<div className="items">
<span className="desc">Monster</span>
<div className="valuewrap">
<strong className="value-current">
797
</strong>
</div>
</div>
</div>

<div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<div className="item">
<span className="desc">Power</span>
<div className="valuewrap">
<strong className="value-current">
73 hp (54 kW)
</strong>
</div>
</div>
</div>

<div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<div className="item">
<span className="desc">Torque</span>
<div className="valuewrap">
<strong className="value-current">
49 lb-ft (67 Nm)
</strong>
</div>
</div>
</div>
<div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<div className="item">
<span className="desc">Seat height</span>
<div className="valuewrap">
<strong className="value-current">
805 mm (31.69 in)
</strong>

</div>
</div>
</div>
<div className="col-md-2 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
<div className="item">
<span className="desc">Safety</span>
<div className="valuewrap">
<strong className="value-current">
ABS
</strong>
</div>
</div>
</div>


</div>
</div>
</div>

</section>

<section className="textstartfig my-5">
<div className= "container" >
<div className="row">
<div className="col-10 mx-auto">
<h1>Let's have fun</h1>
<p>The Monster 797 is the ideal bike for those who want to enter the world of Ducati for the first time. 
As sporty and essential as any Monster, it offers everything you need for a fun ride that is also easy and intuitive. 
In addition, the new graphics give the Monster 797 unique personality and style.</p>
<p>The Monster 797 is also available in a restricted power version of 35KW, compliant for A2 license riders. </p>
</div>
</div>
</div>
</section>

<section className="textstartfig my-5">
<div className= "container infowithtab">
<div className="row">
<div className="col-12 mx-auto">
<div className="row">
<div className="container-fluid">

<ul className="nav">
<li className="active"><a href="#firsttab" data-toggle="tab">DESIGN</a></li>
<li><a href="#secondtab" data-toggle="tab">ENGINE</a></li>
<li><a href="#thirdtab" data-toggle="tab">ERGONOMICS</a></li>
<li><a href="#fourthtab" data-toggle="tab">DETAILS</a></li>
</ul>

<div className="tab-content">
<div className="tab-pane active" id="firsttab">
<div className="col-12 mx-auto">
<div className="row"> 
<div className="col-md-6 tabimg">
<img src={tab1} className="img-fluid animated" alt="home-img" />
</div>

<div className="col-md-6 mx-auto designtext">
<h1>A contemporary character </h1>
<p>Muscular lines and an imposing front bring out the strong and restless personality of the new Diavel,
featuring a long, slender rear with a 240 mm rear wheel. The colour range of the Diavel 1260 has been updated:
the standard version is now available in total black, while the S version is available in Ducati red with white graphics. 
A new sporty Diavel 1260 S, without sacrificing the style that distinguishes it.</p>
</div>

</div>
</div>
</div>

<div className="tab-pane" id="secondtab">
<div className="col-12 mx-auto">
<div className="row"> 
<div className="col-md-6 tabimg">
<img src={tab2} className="img-fluid animated" alt="home-img" />
</div>
<div className="col-md-6 mx-auto designtext">
<h1>The engine is the king</h1>
<p>The new Diavel is built around the Testastretta DVT 1262 engine, a beacon of power, beauty and sophistication. 
Its 152 hp translate to unbelievable acceleration and pick-up, while the flat and consistent torque curve since low rpm allows steady and easy to handle delivery. The Ride by Wire (RbW) control matched with three Riding Modes and three Power Modes allows to personalise engine responsiveness. A true beauty, as far as mechanics and design go, and a real game changer on the road.</p>
</div>
</div>
</div>

</div>

<div className="tab-pane" id="thirdtab">
<div className="col-12 mx-auto">
<div className="row"> 
<div className="col-md-6 tabimg">
<img src={tab3} className="img-fluid animated" alt="home-img" />
</div>

<div className="col-md-6 mx-auto designtext">
<h1>Riding pleasure at its best </h1>
<p>Sportiness and comfort meet in the new Diavel. The trellis frame ensure lightness and torsional rigidity, while the adjustable fork provides comfort and stability. The care devoted to ergonomics is complemented by the perfect combination of a higher handlebar, a lower seat and central footpegs, with a comfortable and versatile riding position. 
The S version is fitted with Öhlins suspensions, for a guaranteed fun and an exciting riding experience.</p>
</div>


</div>
</div>

</div>

<div className="tab-pane" id="fourthtab">
<div className="col-12 mx-auto">
<div className="row"> 
<div className="col-md-6 tabimg">
<img src={tab4} className="img-fluid animated" alt="home-img" />
</div>

<div className="col-md-6 mx-auto designtext">
<h1>Cheeky elegance </h1>
<p>The new Diavel is an ode to elegance and sophisticated details: carbon fibre components and a finely stitched premium quality seat complement the Diavel’s outstanding style. No compromises were made on its aggressive character, as Marchesini forged rims and the Thrilling Black & Dark Stealth liveries testify. 
The Daytime Running Light (DRL) headlight, available on the S version, is an unmistakeable hallmark of the new Diavel..</p>
</div>
</div>
</div>

</div>

</div>

</div>
</div>

</div>
</div>
</div>
</section>

<section className="textstartfig my-5">
<div className= "container">
<div className="row">
<div className="col-12 mx-auto">
<div className="row">
<div className="col-md-6 mx-auto section4th">
<div className="text">
<span className="category">Travels</span>
<h1 className="title">The Way Out | New York beyond Manhattan</h1>
<span className="description">The soul of New York is narrated through the faces 
and stories of those who experience the city beyond Manhattan riding a Diavel 1260!</span>
<span className="d-link">
<p>Start your journey</p>
</span>
</div>
</div>
<div className="col-md-6 mx-auto">
<img src={section4} className="img-fluid animated" alt="home-img" />
</div>
</div>
</div>
</div>
</div>
</section> 

<section className="textstartfig my-5">
<div className= "container-fluid">
<div className="row">
<div className="col-12 mx-auto">
<div className="row">
<div id="scroll" className="section horizontal">
  <div className="scroll js-horizontal-scroll">
    <div className="itemscroll">
      
      <img src={slider1} className="img-fluid animated d" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider2} className="img-fluid animated" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider3} className="img-fluid animated" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider4} className="img-fluid animated" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider5} className="img-fluid animated" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider6} className="img-fluid animated" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider7} className="img-fluid animated" alt="home-img" /></div>
    <div className="itemscroll"><img src={slider8} className="img-fluid animated" alt="home-img" /></div>
  </div>
</div>
</div>
</div>
</div>
</div>

</section>

<section id="section6" className="sectio6 my-5 d-flex align-items-center">
<div className= "container">
<h1>Fighter 150</h1>
<a  href="Javascript:void(0)">Fighter 150</a>
<div className="row">
<div className="col-12 mx-auto">
<div className="row">


</div>
</div>
</div>
</div>

</section>





</>)
}
export default Fighter;