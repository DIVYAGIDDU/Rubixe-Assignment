import React from "react";
import './App.css'
import Navbar from "./Components/Navbar";
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
const App=()=>{
  return <>
   <Router>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     </Routes>
   </Router>

  </>
}
export default App;