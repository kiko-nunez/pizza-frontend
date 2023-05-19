import Cheese from "../images/cheese.png"
import Slice from "../images/slice.png"
import Toppings from "../images/toppings.png"

function Landing() {
    return (
        <>
            <div className='regcontainer'>
                <div className='registerForm'>
                    <h3 className='registerh3'>Register User</h3>
                    <form className="regform">
                    Name: 
                        <input
                            type="text"
                            name="name"
                            placeholder='Mr. Cheezus'
                        />
                    Street Address: 
                        <input
                            type="text"
                            name="address"
                            placeholder='123 Main St'
                        />
                    Phone Number: 
                        <input
                            type="text"
                            name="phone"
                            placeholder='1(800)-CHEEZUS'
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