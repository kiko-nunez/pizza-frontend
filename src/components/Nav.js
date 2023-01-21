import React from "react";
import {Link} from "react-router-dom";
import TransparentText from "../images/cheezus_logo.png"

 const Nav = () => {
    return (
    
    <nav>
        <Link to="/">
            <div>Login</div>
        </Link>
        <Link to="/shops">
            <div>Shops</div>
        </Link>
        <Link to="/">
            <img src={TransparentText} alt="logo"/>
        </Link>
        <Link to="/cart">
            <div>Cart</div>
        </Link>
        <Link to="/checkout">
            <div>Checkout</div>
        </Link>
    </nav>
    )
}

export default Nav;

