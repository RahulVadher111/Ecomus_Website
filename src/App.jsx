import './App.css'
import Categories from './Pages/Categories'
import Happy_Clients from './Pages/Happy_Clients'
import Home from './Pages/Home'
import Navbar from "./Pages/Navbar"
import Scroll_btn from './Pages/Scroll_btn'
import Seller_arrivals from './Pages/Seller_arrivals'

function App() {
 

  return (
    <>
      <Navbar />
      <Home />
      <Categories />
      <Seller_arrivals />
      <Happy_Clients />
      <Scroll_btn />  
      
    </>
  )
}

export default App
