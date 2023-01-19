import React from 'react'

const Register = (props) => {
  return (
<div>
<h1>Register User</h1>
<form>
Name: <input
type="text"
name="name"
value=""
placeholder='Mr. Cheezus'
/>
Street Address: <input
type="text"
name="address"
value=""
placeholder='123 Main St'
/>
Phone Number: <input
type="number"
name="phone"
value=""
placeholder='1(800)-CHEEZUS'
/>
</form>
<input className='register' type="submit" value="Register User"/>

</div>

  )
}

export default Register