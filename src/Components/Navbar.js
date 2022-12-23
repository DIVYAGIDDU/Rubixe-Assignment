import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'
import homeLogo from '../Assests/logo.png'
const Navbar=()=>{
  return <div>
    <nav className="nav">
      <div className="nav-left">
        <Link to='/'><img src={homeLogo} className='homeLogo' alt=""/></Link>
      </div>
       <ul className="nav-right-list">
         <li><Link className='li-link' to='/'>HOME</Link></li>
         <li><Link className='li-link' >SERVICES </Link></li>
         <li><Link className='li-link'>PRODUCTS</Link></li>
         <li><Link className='li-link' >AI INTERNSHIP</Link></li>
         <li><Link className='li-link'>CAREER</Link></li>
         <li><Link className='li-link'>BLOG</Link></li>
         <li><Link className='li-link'>ABOUT</Link></li>
         <li><Link className='li-link'>CONTACT US</Link></li>
         
         </ul>
    </nav>
  
  </div>
}
export default Navbar