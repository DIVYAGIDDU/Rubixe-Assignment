import React from 'react'
import '../WhoWe.css'
import whoImg from '../Assests/who-Img.jpeg'
function WhoWE() {
  return (
    <div className='who-main'>
      <div className='who-content'>
      <h1>WHO WE ARE</h1><br/>
      <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). </p>
      <br/>
      <p>Rubixe™ mission is to enable businesses to leverage the full potential of disruptive
        technologies and stay competitive in the market, turning complex challenges into
        solutions, providing a strategic competitive advantage that are more efficient, effective
        and predictable.</p>
      </div>
        <div className='who-img'>
          <img src={whoImg} className="who-img-1" alt=""/>
          <div className='who-box'></div>
          </div>
    </div>
  )
}

export default WhoWE