import { useState } from 'react';
import Cheese from "../images/cheese.png"
import Slice from "../images/slice.png"
import Toppings from "../images/toppings.png"

function Register(props) {
  const formFields = {
    name: "",
    address: "",
    phone: "",
  };

  const [newUser, setNewUser] = useState(formFields);
  
  function handleChange (e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  function handleSubmit (e) {
    e.preventDefault();
    props.createUser(newUser);
    setNewUser(formFields);
  };

  return (
    <>
    <div className='regcontainer'>
      <div className='registerForm'>
        <h3>Register User</h3>
            <form onSubmit={handleSubmit} className="regform">
            Name: 
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={newUser.name}
                  placeholder='Mr. Cheezus'
                />
            Street Address: 
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  value={newUser.address}
                  placeholder='123 Main St'
                />
            Phone Number: 
                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  value={newUser.phone}
                  placeholder='1(800)-CHEEZUS'
                />
                <input className='register' type="submit" value="Register User"/>
            </form>
            {/* { props.people ? loaded() : loading() } */}
      </div>
      <div className='animation'>
        <div className='parent'>
          <img src={Slice} alt="slice" className='leftside' id="sliceleft"/>
          <img src={Cheese} alt="cheese" className='rightside' id="cheeseright"/>
          <img src={Toppings} alt="toppings" className='bottom' id="toppingbottom"/>
        </div>
        {/* <h1 className='rightside'>Slice</h1>
        <h1 className='leftside'>Toppings</h1>
        <h1 className='bottom'>Cheese</h1> */}
      </div>
    </div>
    </>
    );
    
  }

export default Register;