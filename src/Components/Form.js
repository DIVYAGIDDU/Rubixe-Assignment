import React from "react";
import './Form.css';
const Form=()=>{
    return <> 
           <div className="form-container">
             <div className="form-left">
               <h1>GET IN TOUCH</h1>
                <h3 className="h3-text">Please complete the form and we will get back to you.</h3>
             </div>
             <div className="form-right">
             <label className="label">Name*</label>
             <input  className="input" type="text" placeholder="Enter Your Name"/> <br/>
            <label className="label">Email</label>
            <input  className="input" type="text" placeholder="Enter Your Email Id"/><br/>
             <label className="label">Mobile Number</label>
             <input  className="input" type="text" placeholder="Enter Your Mobile NUmber"/><br/><br/>
             <button className="input btn">Register Now</button>
             </div>
           </div>
    
    </>
}
export default Form