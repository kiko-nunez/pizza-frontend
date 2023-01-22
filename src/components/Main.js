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
    const URL = 'https://cheesus.herokuapp.com/shop/'
  
  
    const getShops = async () => {
  
      const response = await fetch(URL)
      const data = await response.json()
      // console.log(data);
      setShops(data)
    }

    useEffect(() => {
        getShops()
      }, [])

      // USER Call
      // const USER_URL = "http://localhost:4000/user/" 
      const USER_URL = "https://cheesus.herokuapp.com/user/" 
  
      const [ user, setUser ] = useState(null);

      const getUser = async () => {
        const resU = await fetch(USER_URL);
        const dU = await resU.json();
        setUser(dU);
      }
    
      const createUser = async (users) => {
        await fetch(USER_URL, {
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


      //const MENU_URL = "http://localhost:4000/menu/" 
      const MENU_URL = "https://cheesus.herokuapp.com/menu/" 

    

  
      const [ menu, setMenu ] = useState(null);
      const getMenu = async () => {
        const res = await fetch(MENU_URL);
        const d = await res.json();
        setMenu(d);
      }
    
      const createMenu = async (menus) => {
        await fetch(MENU_URL, {
          method: "POST",
          headers: {
            "Content-type": "Application/json",
          },
          body: JSON.stringify(menus),
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
        <Route exact path="/" element={<Register 
                                        user={user}
                                        createUser={createUser}
                                      />} 
        />
        <Route path= "/cart" element={<Cart menu={menu}/>} />
        <Route path= "/checkout" element={<Checkout />} />
        {/* <Route path= "/:id" element={<Register user={user}/>}/> */}
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

    export default Main;