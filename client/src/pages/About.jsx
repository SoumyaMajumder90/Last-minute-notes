import React from 'react';
import './About.css'; // Import your CSS file
import { useAuth } from '../store/auth';
const About = () => {

  const {user} = useAuth();
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Hi {user.username}.



          
          Welcome to our website! We are a passionate team dedicated to providing
          high-quality services and solutions. Our mission is to meet your unique
          needs and help you succeed in the digital world.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          We are committed to innovation, excellence, and customer satisfaction.
          Explore our website to learn more about our services and how we can
          contribute to your success.
        </p>
      </div>
      <div className="about-image">
        {/* Add an image related to your about section */}
        <img
          src="/images/about.jpg"
          alt="Team at work"
          width="400"
          height="300"
        />
      </div>
    </div>
  );
};

export default About;
