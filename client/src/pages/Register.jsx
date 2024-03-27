// Register.jsx
import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../store/auth"

const Register = () => {
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone: "",
    password:"",
  
  });

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth;
  //handleInput the input values
  const handleInput = (e)=>{
    console.log(e);
    // let name = e. //event object
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, //preserve previous data using spread operator
      [name]:value,  //dynamic. when password is typed. name change to "password" and value = "the value typed"
    });

  } 
  const handleSubmit = async (e) => {
    e.preventDefault(); //restrict refresh
    console.log(user);

    try {
        const response = await fetch('https://last-minute-notes-2.onrender.com/api/auth/register', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(user),
        });
        // console.log(response); 
        const res_data = await response.json();
        console.log("res from server", res_data.extraDetails);
        if(response.ok){
          alert('Registered Succesfully');
          //stored the token in localhost
           storetokenInLS(res_data.token);

          //Or
          // localStorage.setItem('token', res_data);

          setUser({ username:"",
          email:"",
          phone: "",
          password:"",});
          navigate("/");

        }else{
          alert(res_data.extraDetails ?  res_data.extraDetails : res_data.message);
        }
        console.log(response);  // Move this line inside the try block

        // Now you can handle the response as needed, for example:
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("register" + error);
    }
};


  return (
    <div className="register-container">
      <div className="left-container">
        {/* Image or any other content for the left side */}
        <img
          src={process.env.PUBLIC_URL + '/assets/blackcat.png'}
          alt="cute cat"
          // style={{ width: '80%', height: '400px' }}
        />
      </div>
      <div className="right-container">
        {/* Registration form on the right side */}
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder='Username' required autoComplete='off' value={user.username} onChange={handleInput}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='Enter your Email' required autoComplete='off' value={user.email} onChange={handleInput}/>

          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" placeholder='Enter your Phone Number' required autoComplete='off' value={user.phone} onChange={handleInput}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder='Enter Your Password' required autoCapitalize='off' value={user.password} onChange={handleInput}/>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
