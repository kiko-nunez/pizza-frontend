import { Link } from 'react-router-dom';

function Nav (props) {
    return (
        <>
        <div className="nav">
            <Link to="/">
                <div>CheeZus</div>
            </Link>
            <Link to="Cart">
                <div>Cart</div>
                </Link>
                <Link to="Login">
                    <div>Login</div>
                </Link>
                <Link to="Checkout">
                    <div>Checkout</div>
                </Link>
                <Link to="Shop">
                    <div>Shop</div>
                </Link>
        </div>
        </>
    );
}

export default Nav