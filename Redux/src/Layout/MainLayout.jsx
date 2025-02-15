import React from 'react'
import Header from '../components/Header' 
import Products from '../pages/Products'
import ProductForm from '../pages/ProductForm'
import SharedLayout from '../SharedLayout/SharedLayout'
import { Home } from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import NotFound from '../pages/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Counter from '../pages/Counter'
import Counter from '../pages/CounterWithToolKit'

export default function MainLayout() {

  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<SharedLayout />} >
              <Route index element={<Home />} />
              <Route  path='products' element={<Products />} />
              <Route path='products/:id' element={<ProductDetails />} />
              <Route path='products/:id/edit' element={<ProductForm />} />
              <Route path='counter' element={<Counter />} />
              <Route path='*' element={<NotFound /> } />
              </Route>
            </Routes>
          </BrowserRouter>

          
    </>
  )
    
}
