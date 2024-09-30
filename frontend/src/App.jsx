import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Index from "./Index"
import Product from "./Product"
import ErrorPage from "./ErrorPage"
import MyTickets from "./MyTickets"
import Detail from "./Detail"
import Ticket from "./Ticket"
import Article from "./Article"
import "./styles/style.css"
import "./styles/index.css"
import "./styles/product.css"
import "./styles/detail.css"
import "./styles/myTickets.css"
import "./styles/ticket.css"
import "./styles/article.css"

function App() {

  return (
    <Router>
      
      <Routes>

        <Route path='/' element={<Index/>}/>
        <Route path='/tourisme/:params' element={<Product/>}/>
        <Route path='/tourisme/:params/:id' element={<Detail/>}/>
        <Route path='/vosbillets' element={<MyTickets/>}/>
        <Route path='/vosbillets/:id' element={<Ticket/>}/>
        <Route path='/:params/:id' element={<Article/>}/>

        <Route path='/*' element={<ErrorPage/>}/>
        
      </Routes>
    
    </Router>
  )
}

export default App
