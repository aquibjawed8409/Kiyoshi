import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyle'
import SingleProduct from './Pages/SingleProduct'



const App = () => {
  return (  
    <BrowserRouter>
    <GlobalStyle />
    <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/product' element = {<Product />} />
        <Route path='/singleproduct/:id' element = {<SingleProduct />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='*' element = {<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
