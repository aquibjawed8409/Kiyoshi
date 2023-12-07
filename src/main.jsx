import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {FilterProvider}  from './Context/FilterContext.jsx'
// import { ProductPageProvider } from './Context/ProductPageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FilterProvider>
  {/* <ProductPageProvider> */}
    <App />
    {/* </ProductPageProvider> */}
    </FilterProvider>
  </React.StrictMode>
)
