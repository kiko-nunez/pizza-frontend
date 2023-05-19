import Cheese from "../images/cheese.png"
import Slice from "../images/slice.png"
import Toppings from "../images/toppings.png"

function Landing() {
    return (
        <>
            <div className='regcontainer'>
                <div className='searchWrapper'>
                    <h3 className='registerh3'>Search for Pizza</h3>
                    <form className="searchBar">
                        <select id="options" name="options" className="optionsBtn btn">
                            <option value="Delivery">Delivery</option>
                            <option value="Pickup">Pickup</option>
                        </select>  
                        <label htmlFor="address">Street Address: </label>
                        <input
                            type="text"
                            name="address"
                            placeholder='123 Main St'
                        />
                        <input className='register' type="submit" value="Register User"/>
                    </form>
                </div>
                <div className='animation'>
                    <div className='parent'>
                        <img src={Slice} alt="slice" className='leftside' id="sliceleft"/>
                        <img src={Cheese} alt="cheese" className='rightside' id="cheeseright"/>
                        <img src={Toppings} alt="toppings" className='bottom' id="toppingbottom"/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Landing;