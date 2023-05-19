import Cheese from "../images/cheese.png"
import Slice from "../images/slice.png"
import Toppings from "../images/toppings.png"


function Landing() {
    return (
        <>
        <main className="parent">
            <div className='searchContainer'>
                <div className='searchWrapper'>
                    <h1 className=''>Search for Pizza</h1>
                    <form className="searchBar">
                        <select id="options" name="options" className="optionsBtn">
                            <option value="Delivery">Delivery</option>
                            <option value="Pickup">Pickup</option>
                        </select>  
                        <input type="text" className="addressSearch" name="address" placeholder='Enter Address to search...'/>
                        <input className='findPizza' type="submit" value="Find Pizza"/>
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
        </main>
        </>
    )
};

export default Landing;