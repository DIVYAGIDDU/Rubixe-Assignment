import React from "react";
import {Link} from 'react-router-dom';
import './Footer.css'
const Footer=()=>{
 return <>
        <div className="footer-bg">
          <div className="footer">
           <div className="footer-one">
             <div className="footer-header">ABOUT US</div>
             <div className="footer-body">
             Rubixe"•' is a global technology company specializing in disruptive
             technologies - Artificial Intelligence (Al), Machine Learning. Robotic Process
             Automation (RPA). BlockChain and Internet of Things (IOT). Rubixe mission
             to enable businesses to leverage the full potential of disruptive
             technologies to stay competitive in the market.
             </div>
           </div>
           <div className="footer-two">
             <div className="footer-header">MENUS</div>
              <div className="footer-body">
              <Link className="footer-link">HOME</Link>
              <Link className="footer-link">SERVICES</Link>
              <Link className="footer-link">PRODUCTS</Link>
              <Link className="footer-link">CAREER</Link>
              </div>
           </div>
           <div className="footer-three">
             <div className="footer-header">LEARN MOR</div>
             <div className="footer-body">
               <Link className="footer=link">ABOUT</Link>
               <Link className="footer=link">CONTACT US</Link>
             </div>
           </div>
           <div className="footer-four">
            <div className="footer-header">ADDRESS</div>
            <div className="footer-body">
            <p>Novel Tech Park, 1st Floor, Hosur Rd,
            Kudlu gate, Bengaluru, Karnataka
            560068
            Phone: 0804-717-8999
            Email: hi@rubixe.com</p>
            <div><p>SOCIAL MEDIA</p></div>
            </div>
           </div>
          </div>
          <div className="copyRight">
            <h5>@ copyright 2017 - 2022  | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. I All Rights Reserved</h5>
          </div>
        </div>
 </>
}
export default Footer