

import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import { useAuth } from '../store/auth';

const Contact = () => {
  // State hooks for form fields
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  });
const {userData, setUserData} = useState(true);
  const user = useAuth();
  
if(userData && user){
  console.log("user data from contact", user.username);

 setFormData({
  username:user.username,
  email:user.email,
  message: "",

 });
      setUserData(false); //since i have already updated the value
}

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            cols="30" rows="10"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          
         
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
