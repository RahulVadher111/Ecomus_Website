import './App.css'
import React from "react";

import { Routes, Route } from "react-router-dom";

import Categories from './Pages/Categories'
import Footer from './Pages/Footer'
import Happy_Clients from './Pages/Happy_Clients'
import Home from './Pages/Home'
import Navbar from "./Pages/Navbar"
import Scroll_btn from './Pages/Scroll_btn'
import Seller_arrivals from './Pages/Seller_arrivals'
import Shop_Gram from './Pages/Shop_Gram'
import Shopping_page from './Pages/Shopping_page';
import ProductCard from './Pages/ProductCard';

function App() {
 

  return (
    <>
      <Navbar />

      <Routes>

        <Route 
        path='/'
        element={
          <>
      <Home />
      <Categories />
      <Seller_arrivals />
      <Happy_Clients />
      
      <Shop_Gram />
      </>
        }
    />

        <Route path="/Shopping_page" element={<Shopping_page />} />  
        <Route path="/Product_card" element={<ProductCard />} />  


      </Routes>

      
      <Scroll_btn />  
      <Footer />
      
    </>
  )
}

export default App
