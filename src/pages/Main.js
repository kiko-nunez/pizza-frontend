import React from 'react'
import Navbar from '../components/Nav'
import Images from "../images/Cheezus.png"

const Main = () => {
  return (
    <>

    <div className="storeInfo">

      <div className="store">  <img className="img"src={Images}/> Store 1</div>
      <div className="store">Store 2</div>
      <div className="store">Store 3</div>
      <div className="store">Store 4</div>
   </div>
  
    </>
   
 )
}

export default Main