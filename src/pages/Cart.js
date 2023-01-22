import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
        const loaded = () => {
          
          return props.cart.map(carts => (
            <div className='cartDiv'>
              <div key={carts._id} className="cartList">
                      <h4>{carts.item}</h4>
                      <p>{carts.price}</p>
              </div>
              <div className="line"></div>
            </div>
          ));
      };

      const loading = () => {
          return <h1>Kneeding the Doughs...</h1>
      };
      
      return (
        <>
        <span className='cartContainer'>
        <span className='cartHeader'>
        <h1>Your Pizza Order</h1>
        <p className="line"></p>
        </span>
        
        <div> 
          { props.cart ? loaded() : loading() }
        </div>
        <div className=''>
        <Link to={`/menu`}>
        <button>Back to Menu</button>
        </Link>
        <Link to={`/checkout`}>
        <button>Continue to Checkout</button>
        </Link>
        </div>
        </span>
        </>
      );
}

export default Cart;