import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Index from "./Index"
import Product from "./Product"
import ErrorPage from "./ErrorPage"
import Detail from "./Detail"
import "./styles/style.css"
import "./styles/index.css"
import "./styles/product.css"
import "./styles/detail.css"

function App() {

  return (
    <Router>
      
      <Routes>

        <Route path='/' element={<Index/>}/>
        <Route path='/tourisme/:params' element={<Product/>}/>
        <Route path='/tourisme/:params/:id' element={<Detail/>}/>

        <Route path='/*' element={<ErrorPage/>}/>
        
      </Routes>
    
    </Router>
  )
}

export default App
