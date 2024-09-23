import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Index from "./Index"
import Product from "./Product"
import ErrorPage from "./ErrorPage"

function App() {

  return (
    <Router>
      
      <Routes>

        <Route path='/' element={<Index/>}/>
        <Route path='/exploration/:params' element={<Product/>}/>

        <Route path='/*' element={<ErrorPage/>}/>
        
      </Routes>
    
    </Router>
  )
}

export default App
