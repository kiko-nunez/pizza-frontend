import React from 'react';

function Checkout(props) {

  const pay = () => {
    alert("In CheeZus we crust");
  }

  return (
    <div className="checkout">
      <h1 className='cHeader'>Checkout</h1>
      <form className="payment">
          Cardholder's Name  
          <input
            type="text"
            name="name" 
         />
          Card Number 
          <input
            type="number"
            name="cardNumber" 
         />
          Expiration Date  
          <input
            type="number"
            name="expDate" 
         />
          CCV 
          <input
            type="number"
            name="cvv" 
         />
      
      </form>
        <div className='order'>
          <button onClick={pay}> Place Order
          </button>
        </div>
    </div>
  );
}

export default Checkout
