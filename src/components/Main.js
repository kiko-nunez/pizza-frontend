import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Register from "../pages/Register";
import Shops from "../pages/Shops";
import Nav from "../components/Nav"


const Main = () => {
    const [shops, setShops] = useState(null)
  
    const URL = 'https://cheesus.herokuapp.com/'
  
  
    const getShops = async () => {
  
      const response = await fetch(URL, {
        method: 'GET'
      })
      const data = await response.json()
      setShops(data)
    }

    useEffect(() => {
        getShops()
      }, [])


    return (

    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route path= "/cart" element={<Cart />} />
        <Route path= "/checkout" element={<Checkout />} />
        <Route path= "/login" element={<Register />} />
        <Route path= "/shops" element={<Shops/>} />
  
      </Routes>
  
      </div>
    )}

    export default Main