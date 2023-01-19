import React from 'react'
import { useState } from 'react'

const Register = (props) => {
  const formFields = {
    name: "",
    address: "",
    phone: "",
  }


  const [newUser, setNewUser] = useState(formFields)

  function handleSubmit (e) {
    e.preventDefault()
    props.createPeople(newUser)
    setNewUser(formFields)
  }

  function handleChange (e) {
    setNewUser((prevState) =>  ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }


  return (
<div>
<h1>Register User</h1>
<form onSubmit={handleSubmit}>
Name: <input
type="text"
name="name"
onChange={handleChange}
value={newUser.name}
placeholder='Mr. Cheezus'
/>
Street Address: <input
type="text"
name="address"
onChange={handleChange}
value={newUser.address}
placeholder='123 Main St'
/>
Phone Number: <input
type="number"
name="phone"
onChange={handleChange}
value={newUser.phone}
placeholder='1(800)-CHEEZUS'
/>
</form>
<input className='register' type="submit" value="Register User"/>

</div>
  )
}

export default Register