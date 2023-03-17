import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Register from "../pages/Register";
import Shops from "../pages/Shops";
import MenuEdit from '../pages/MenuEdit';
import MenuShow from '../pages/MenuShow';
import { API_URLS } from '../Url';


const Main = () => {

    const [shops, setShops] = useState(null)
  
   // SHOP CALL
    const getShops = async () => {
  
      const response = await fetch(API_URLS.SHOP)
      const data = await response.json()
      // console.log(data);
      setShops(data)
    }

    useEffect(() => {
        getShops()
      }, [])

      // USER Call
      const [ user, setUser ] = useState(null);

      const getUser = async () => {
        const resU = await fetch(API_URLS.USER);
        const dU = await resU.json();
        setUser(dU);
      }
    
      const createUser = async (users) => {
        await fetch(API_URLS.USER, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(users),
        });
        getUser();
      };
    
      // leaving this here for future enhancements
      
      // const updateUser = async (id, updatedUsers) => {
        //   await fetch(USER_URL + id, {
          //     method: "PUT",
          //     headers: {
            //       "Content-type": "Application/json",
            //     },
            //     body: JSON.stringify(updatedUsers),
            //   });
            //   getUser();
            // };
            
      // leaving this here for future enhancements

      // const deleteUser = async (id) => {
      //   await fetch(USER_URL + id, {
      //     method: "DELETE",
      //   });
      //   getUser();
      // };
    
      useEffect(() => { 
        getUser();
      }, []);

      // MENU Call
  
      const [ menu, setMenu ] = useState(null);
      const getMenu = async () => {
        const res = await fetch(API_URLS.MENU);
        const d = await res.json();
        setMenu(d);
      }
    
      const createMenu = async (menus) => {
        await fetch(API_URLS.MENU, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(menus),
        });
        getMenu();
      };
    
      const updateMenu = async (id, updatedMenus) => {
        await fetch(API_URLS.MENU + id, {
          method: "PUT",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(updatedMenus),
        });
        getMenu();
      };
    
      const deleteMenu = async (id) => {
        await fetch(API_URLS.MENU + id, {
          method: "DELETE",
        });
        getMenu();
      };
    
      useEffect(() => { 
        getMenu();
      }, []);

      // Cart Call

      const [ cart, setCart ] = useState(null);
      const getCart = async () => {
        const resCart = await fetch(API_URLS.CART);
        const dataCart = await resCart.json();
        setCart(dataCart);
      }
    
      const createCart = async (carts) => {
        await fetch(API_URLS.CART, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(carts),
        });
        getCart();
      };
    
      const updateCart = async (id, updatedCarts) => {
        await fetch(API_URLS.CART + id, {
          method: "PUT",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(updatedCarts),
        });
        getCart();
      };
    
      const deleteCart = async (id) => {
        await fetch(API_URLS.CART + id, {
          method: "DELETE",
        });
        getCart();
      };
    
      useEffect(() => { 
        getCart();
      }, []);


    return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register 
                                        user={user}
                                        createUser={createUser}
                                      />} 
        />
        <Route path= "/cart" element={<Cart menu={menu} cart={cart} deleteCart={deleteCart} updateCart={updateCart}/>} />
        <Route path= "/checkout" element={<Checkout />} />
        <Route path= "/shops" element={<Shops shops={shops} />} />
        <Route path="/menu" element={<MenuShow menu={menu} createMenu={createMenu} createCart={createCart} cart={cart}/>}/>
        <Route path="/menu/:id" element={<MenuEdit
                                                menu={menu}
                                                deleteMenu={deleteMenu}
                                                updateMenu={updateMenu}
         />}/>
  
      </Routes>
  
      </div>
    );
}

    export default Main;