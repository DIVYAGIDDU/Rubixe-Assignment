import React from "react";
import './Header.css'
import logo2 from '../Assests/header-img.png'
const Header=()=>{
    return <>
       <div className="header">
         <div className="header-content">
           <img className="header-img" src={logo2} alt=""/>
           <p>CARVING FETURE</p>
            <p>TECHNOLOGY PROFESSIONALS</p>
             <p>OUT OF YOUN MINDS</p>
             </div>
       </div>
    
    </>
}
export default  Header