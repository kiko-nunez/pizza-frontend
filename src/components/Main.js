import { useState, useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Register from "../pages/Register";
import Shops from "../pages/Shops";
import MenuEdit from '../pages/MenuEdit';
import MenuShow from '../pages/MenuShow';

const Main = () => {
    const [shops, setShops] = useState(null)
  
    // const URL = 'http://localhost:4000/shop'
    const URL = 'http://cheesus.herokuapp.com/shop'
  
  
    const getShops = async () => {
  
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data);
      setShops(data)
    }

    useEffect(() => {
        getShops()
      }, [])

      // MENU Call

      const MENU_URL = "http://localhost:4000/menu" // https://cheesus.herokuapp.com/menu
  
      const [ menu, setMenu ] = useState(null);
      const getMenu = async () => {
    
        const res = await fetch(MENU_URL);
        const d = await res.json();
        setMenu(d);
      }
    
      const createMenu = async (menu) => {
        await fetch(MENU_URL, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(menu),
        });
        getMenu();
      };
    
      const updateMenu = async (id, updatedMenus) => {
        await fetch(MENU_URL + id, {
          method: "PUT",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(updatedMenus),
        });
        getMenu();
      };
    
      const deleteMenu = async (id) => {
        await fetch(MENU_URL + id, {
          method: "DELETE",
        });
        getMenu();
      };
    
      useEffect(() => { 
        getMenu();
      }, []);


    return (

    <div className="App">
      <Routes>
        <Route exact path="/" element={<Register/>} />
        <Route path= "/cart" element={<Cart />} />
        <Route path= "/checkout" element={<Checkout />} />
        <Route path= "/login" element={<Register />} />
        <Route path= "/shops" element={<Shops shops={shops} />} />
        <Route path="/menu" element={<MenuShow menu={menu} createMenu={createMenu}/>}/>
        <Route path="/menu/:id" element={<MenuEdit
         menu={menu}
         deleteMenu={deleteMenu}
         updateMenu={updateMenu}
         />}/>
  
      </Routes>
  
      </div>
    )}



    export default Main