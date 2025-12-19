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
import Pages_About_us from './Pages/Pages_About_us';
import Pages_Brands from './Pages/Pages_Brands';
import Pages_Brands_02 from './Pages/Pages_Brands_02';
import Pages_Contact_us from './Pages/Pages_Contact_us';
import Pages_Contact_Us_2 from './Pages/Pages_Contact_Us_2';
import Pages_FAQ_01 from './Pages/Pages_FAQ_01';
import Pages_FAQ_02 from './Pages/Pages_FAQ_02';

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
        <Route path="/Pages_About_us" element={<Pages_About_us />} />  
        <Route path="/Pages_Brands" element={<Pages_Brands />} />  
        <Route path="/Pages_Brands_v2" element={<Pages_Brands_02 />} /> 
        <Route path="/Pages_Contact_us" element={<Pages_Contact_us />} />  
        <Route path="/Pages_Contact_Us_2" element={<Pages_Contact_Us_2 />} />  
        <Route path="/Pages_FAQ_01" element={<Pages_FAQ_01 />} />  
        <Route path="/Pages_FAQ_02" element={<Pages_FAQ_02 />} />  









      </Routes>

      
      <Scroll_btn />  
      <Footer />
      
    </>
  )
}

export default App
