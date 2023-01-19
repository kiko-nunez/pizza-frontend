import React from "react";
import {Link} from "react-router-dom";
import Images from "../images/Cheezus.png"

//import { logIn, logOut } from '../firebase'




 const Nav = () => {
    return (
    
    <nav className='nav'>

        <img src={Images} alt="logo"/>
        <div className="nav">
                <Link to="/">
                    <div>CheeZus</div>
                </Link>
                <Link to="/">
                    <div>Login</div>
                </Link>
                <Link to="/shops">
                    <div>Shops</div>
                </Link>
                <Link to="/menu">
                    <div>Menu</div>
                </Link>

        </div>
    </nav>
    )
}

export default Nav;

