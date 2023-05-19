import React from "react";
import { logIn, logOut } from "../firebase";
import { useLocation } from 'react-router';
import { useNavigate } from "react-router-dom";
import TransparentText from "../images/cheezus_logo-removebg-preview.png"

 const Nav = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const shopsClick = () => {
        navigate('/shops');
    };
    // const loginClick = () => {
    //     navigate('/register');
    // };
    const cartClick = () => {
        navigate('/cart');
    };
    const checkoutClick = () => {
        navigate('/checkout');
    };
    const imageClick = () => {
        navigate('/');
    };

    return (
    
    <nav style={location.pathname === '/' ? { position: 'relative' } : null}>
        {props.user ?
                    <h2 className="navLogin" style={{cursor: "pointer"}} onClick={logOut}>Logout</h2>
                    :
                    <h2 className="navLogin" style={{cursor: "pointer"}} onClick={logIn}>Login</h2>
                }
        <h2 className="navShops" onClick={shopsClick}>Shops</h2>
        <img className="navImage" src={TransparentText} alt="logo" onClick={imageClick}/>
        <h2 className="navCart" onClick={cartClick}>Cart</h2>
        <h2 className="navCheckout" onClick={checkoutClick}>Checkout</h2>
    </nav>
    )
}

export default Nav;

