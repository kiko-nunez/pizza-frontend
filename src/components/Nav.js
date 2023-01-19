
import React from "react";
import {Link} from "react-router-dom";
import Images from "../images/Cheezus.png"

//import { logIn, logOut } from '../firebase'




 const Navbar = () => {
    return (<nav className='nav'>
        <img src={Images} alt="logo"/>
        <a href='/' className='site-title'> Cheezus </a>

        <ul>
            <li>
                <a href="/Login"> Login/Register</a>
            </li>
            <li>
                <a href="/Cart"> Cart</a>
            </li>
            <li>
                <a href="/Shop"> Shop</a>
                </li>
                <li>
                <a href="/Checkout"> Checkout</a>
                </li>
        </ul>
    </nav>)
}

export default Navbar;

