import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Components/Footer'
import Home from './Home'
import About from './About'
import Product from './Product'
import Catalogue from './Catalogue'
import PriceList from './PriceList'
import Contact from './Contact'
import Error from './Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyle'
import SingleProduct from './SingleProduct'



const App = () => {
  return (  
    <BrowserRouter>
    <GlobalStyle />
    <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/product' element = {<Product />} />
        <Route path='/catalogue' element = {<Catalogue />} />
        <Route path='/pricelist' element = {<PriceList />} />
        <Route path='/singleproduct/:id' element = {<SingleProduct />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='*' element = {<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
