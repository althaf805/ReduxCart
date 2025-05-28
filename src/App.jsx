import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import View from './pages/View'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'





function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Wishlist' element={<Wishlist/>}/>
    <Route path='/:id/view' element={<View/>}/>
    <Route path='/*' element={<Pnf/>}/>

  </Routes>
  <Footer/>
  </>
  )
}

export default App