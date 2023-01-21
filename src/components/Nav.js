import React from "react";
import { useLocation } from 'react-router';
import {Link} from "react-router-dom";
import TransparentText from "../images/cheezus_logo.png"

 const Nav = () => {

    const location = useLocation();

    return (
    
    <nav style={location.pathname === '/' ? { position: 'relative' } : null}>
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

