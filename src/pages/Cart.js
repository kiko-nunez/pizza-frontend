import React from 'react'

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

export default Cart