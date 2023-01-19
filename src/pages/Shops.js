
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Navbar from '../components/Nav'

const Shops = () => {
  const [shops, setShops] = useState()
  console.log(shops);

  const URL = 'https://cheesus.herokuapp.com/'


  const getShops = async () => {

    const response = await fetch(URL, {
      method: 'GET'
    })
    const data = await response.json()
    setShops(data)
  }
  
  const loaded = () => {
    return shops.map(shop => (
      <div key={shop._id}>
        <Link to={`/shops/${shop._id}`}>
          <h1>Name: {shop.name} </h1>
          <h2>{shop.image}</h2>
        </Link>
      </div>
    ))
  }
const loading = () => {
  return <h1>Loading...</h1>
}


  return (
    <section>
    <div className="storeInfo">
      {shops}
   </div>
   {shops ? loaded() : loading()}
    </section>
   
 )
 
import React from 'react'
import Navbar from '../components/Nav'

const URL = 'https://cheesus.herokuapp.com/'

const Shops = () => {
  getShops = async () => {

    const response =
  }
  
  return (
    <>
    <div className="storeInfo">
      <div className="store">Store 1</div>
      <div className="store">Store 2</div>
      <div className="store">Store 3</div>
      <div className="store">Store 4</div>
   </div>
  
    </>
   
 )
}

export default Shops