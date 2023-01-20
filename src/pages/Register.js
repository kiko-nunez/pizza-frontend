import { useState } from 'react';

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

  
  // const loaded = () => {
  //   return props.user.map(users => (
  //     <div key={users._id} className="userItem">
  //             <h1>{users.name}</h1>
  //             <h3>{users.address}</h3>
  //             <h2>{users.phone}</h2>
  //     </div>
  //   ));
  // };
  
  // const loading = () => {
  //   return <h1>Kneeding the Doughs...</h1>;
  // };

  return (
      <section>
        <h1>Register User</h1>
            <form onSubmit={handleSubmit}>
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
      </section>
    );
    
  }

export default Register;