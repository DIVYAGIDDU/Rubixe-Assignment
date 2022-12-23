import React from 'react'
import Header from './Components/Header'
import WhoWE from './Components/WhoWE'
import History from './History'
import InitiativeCard from './Components/InitiativeCart'
import Form from './Components/Form'
import Footer from './Components/Footer'
const Home=()=>{
  return (
     <>
    <div><Header /></div>
    <div><WhoWE /></div>
    <div><History /></div>
    <div><InitiativeCard/></div>
    <div><Form/></div>
    <div><Footer/></div>
    </>
  )
}

export default Home