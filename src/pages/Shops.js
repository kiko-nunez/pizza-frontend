
// import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Navbar from '../components/Nav'


function Shops (props) {
console.log(props);

const Shops = () => {
  const [shops, setShops] = useState()

  const URL = 'https://cheesus.herokuapp.com/'


  const getShops = async () => {

    const response = await fetch(URL, {
      method: 'GET'
    })
    const data = await response.json()
    setShops(data)
  }
  

  const loaded = () => {
    return props.shops.map(shop => (
      <div key={shop._id}>
        <Link to={`/cart`}>
          <h1>Name: {shop.shop_name} </h1>
          <img src={shop.img} alt={shop.shop_name}/>
          <h2>{shop.phone}</h2>
          <h2>{shop.address}</h2>
        </Link>
      </div>
    ))
  }
const loading = () => {
  return <h1>Loading...</h1>
}


  return (
    <section>
   {props.shops ? loaded() : loading()}
    </section>
   

 )}

  }


export default Shops