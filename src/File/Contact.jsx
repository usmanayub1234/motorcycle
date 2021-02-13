import React from "react";
import { useState } from "react";


const Contact =() =>{
const  [data, setData] =useState ({
fullname: "",
phone: "",fullname: "",
email: "",
msg: "",

});
const InputEvent = (event) => {
const {name ,value} =event.target;
setData ((preVal) =>{
return {
...preVal,
[name] : value,
};
});
};

    const fromSubmit = (e) =>{
e.preventDefault();
alert(`my name is ${data.fullname}. 
my phone number is ${data.phone}
my email address is ${data.email}
here what i want to say ${data.msg}
`
);
    };  

return (<>
<div className="contact-tex">
<h1 className="text-center">Contact From</h1>
</div>

 <section id="contactpage" className="header-banner d-flex align-items-center">
<div className="container contact_div">
<div className="row">
<div className="col-md-6 col-10 mx-auto">
<form onSubmit={fromSubmit}>
<div className="mb-3">
<label className="form-label">Full Name</label>
<input type="text" className="form-control" id="exampleFormControlInput1" 
name="fullname"
value={data.fullname}
onChange={InputEvent}
placeholder="Enter your Name" required />
</div>

<div className="mb-3">
<label className="form-label">Phone Number</label>
<input type="Number" className="form-control" id="exampleFormControlInput2"
name="phone"
value={data.phone}
onChange={InputEvent}
placeholder="Mobile Number" />
</div>

<div className="mb-3">
<label  className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleFormControlInput3"
name="email"
value={data.email}
onChange={InputEvent}
placeholder="name@example.com" />
</div>
<div className="mb-3">
<label className="form-label">Message</label>
<textarea className="form-control" id="exampleFormControlTextarea1"
name="msg"
value={data.msg}
onChange={InputEvent}
 rows="3"></textarea>
</div>
<div className="col-12">
<button className="btn btn-outline-primary" type="submit">Submit form</button>
</div>
</form>


</div>
</div>
</div>
</section>
</>)
}
export default Contact;