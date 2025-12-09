import './App.css'
import Categories from './Pages/Categories'
import Footer from './Pages/Footer'
import Happy_Clients from './Pages/Happy_Clients'
import Home from './Pages/Home'
import Navbar from "./Pages/Navbar"
import Scroll_btn from './Pages/Scroll_btn'
import Seller_arrivals from './Pages/Seller_arrivals'
import Shop_Gram from './Pages/Shop_Gram'

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
      <Categories />
      <Seller_arrivals />
      <Happy_Clients />
      <Scroll_btn />  
      <Shop_Gram />
      <Footer />
      
    </>
  )
}

export default App
