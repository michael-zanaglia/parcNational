import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Index from "./Index"
import Product from "./Product"
import ErrorPage from "./ErrorPage"
import MyTickets from "./MyTickets"
import Detail from "./Detail"
import Ticket from "./Ticket"
import Article from "./Article"
import Profile from "./Profile"
import Signup from "./Signup"
import Informations from "./Informations"
import "./styles/style.css"
import "./styles/index.css"
import "./styles/product.css"
import "./styles/detail.css"
import "./styles/myTickets.css"
import "./styles/ticket.css"
import "./styles/article.css"
import "./styles/profile.css"
import "./styles/informations.css"

function App() {

  return (
    <Router>
      
      <Routes>

        <Route path='/' element={<Index/>}/>
        <Route path='/tourisme/:params' element={<Product/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/tourisme/:params/:id' element={<Detail/>}/>
        <Route path='/vosbillets' element={<MyTickets/>}/>
        <Route path='/vosbillets/:id' element={<Ticket/>}/>
        <Route path='/:params/:id' element={<Article/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/informations' element={<Informations/>}/>

        <Route path='/*' element={<ErrorPage/>}/>
        
      </Routes>
    
    </Router>
  )
}

export default App
