import React from "react";
import {Link} from "react-router-dom";
import Images from "../images/Cheezus.png"



 const Nav = () => {
    return (
    
    <nav className='nav'>
        <Link to="/">
            <img className="logoimg"src={Images} alt="logo"/>
        </Link>
        <div className="nav">
                <Link to="/">
                    <div>Login</div>
                </Link>
                <Link to="/shops">
                    <div>Shops</div>
                </Link>
                <Link to="/cart">
                    <div>Cart</div>
                </Link>
                <Link to="/checkout">
                    <div>Checkout</div>
                </Link>

        </div>
    </nav>
    )
}

export default Nav;

