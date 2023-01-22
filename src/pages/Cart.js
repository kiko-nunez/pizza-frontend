
function Cart(props) {
        const loaded = () => {
          return props.cart.map(carts => (
              <div key={carts._id}>
                      <h1>{carts.item}</h1>
                  <img src={carts.image} alt={carts.name}/>
                      <div>{carts.description}</div>
                      <div>{carts.price}</div>
              </div>
          ));
      };

      const loading = () => {
          return <h1>Kneeding the Doughs...</h1>
      };
      
      { props.cart ? loaded() : loading() }
}

export default Cart;