import React from 'react';

function Checkout(props) {

  const pay = () => {
    alert("In CheeZus we trust");
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form>
        <label>
          Cardholder's Name 
          <input
            type="text"
            name="name" 
         />
        </label>
        <label>
          Card Number 
          <input
            type="number"
            name="cardNumber" 
         />
        </label>
        <label>
          Expiration Date  
          <input
            type="number"
            name="expDate" 
         />
        </label>
        <label>
          CCV 
          <input
            type="number"
            name="cvv" 
         />
        </label>
      
      </form>

      <button onClick={pay}> Place Order
      </button>
    </div>
  );
}

export default Checkout
