// Register.jsx
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../store/auth"

const Login = () => {
  const [user, setUser] = useState({

    email:"",
    password:"",
  
  });
  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();  //expoting as orbject cause not default export
  //handleInput the input values
  const handleInput = (e)=>{
    // console.log(e);
    // let name = e. //event object
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, //preserve previous data using spread operator
      [name]:value,  //dynamic. when password is typed. name change to "password" and value = "the value typed"
    });

  } 
  const handleSubmit = async (e)=>{
    e.preventDefault(); //restrict refresh
    try {
      const response = await fetch('https://last-minute-notes-2.onrender.com/api/auth/login', {
          method: "POST",
          headers: {
              'Content-Type': "application/json",
          },
          body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if(response.ok){
       
        alert('login succesfully');
        // localStorage.setItem('token', res_data.token);
        //or
        storetokenInLS(res_data.token);
        setUser({
        email:"",
        password:"",});
        navigate("/home");

      }
      else{
        
        alert(res_data.extraDetails ?  res_data.extraDetails : res_data.message);
      }
      console.log("login form"+response);  // Move this line inside the try block

      // Now you can handle the response as needed, for example:
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.log("register" + error);
  }
  }
  return (
    <div className="login-container">
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
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder='Enter your Email' required autoComplete='off' value={user.email} onChange={handleInput}/>


          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder='Enter Your Password' required autoCapitalize='off' value={user.password} onChange={handleInput}/>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
