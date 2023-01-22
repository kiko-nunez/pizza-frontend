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

const Cart = (props) => {

      
  const loaded = () => {
    return props.menu.map(menus => (
        <div key={menus._id} className="menuItem">
                <h1>{menus.item}</h1>
            <img className="foodie" src={menus.image} alt={menus.name}/>
                <div className="menudes">{menus.description}</div>
                <div className="price">{menus.price}</div>
        </div>
    ));
};

const loading = () => {
    return <h1>Kneeding the Doughs...</h1>
};
  return (
    <div className='cart'>
      <textarea name="cartFuture" id="" cols="30" rows="10">
        On this page we would like to allow users to make any adjustments to their orders before checking out.
      </textarea>
      <hr />
      <h1>Your Order</h1>
      <hr />
      <div className='order'>
        <h2>Cheese Pizza</h2>
      </div>
      { props.menu ? loaded() : loading() }
    </div>
  )
}

export default Cart;