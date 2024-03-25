import React from 'react';
import './Service.css'; // Import your CSS file

const Service = () => {
  const topics = [
    { name: 'Data Structure', link: '/data-structure' },
    { name: 'HTML', link: 'https://www.w3schools.com/html/default.asp' },
    { name: 'CSS', link: 'https://www.tutorialspoint.com/css/css_quick_guide.htm' },
    { name: 'JavaScript', link: 'https://www.w3schools.com/js/' },
    { name: 'C++', link: 'https://www.geeksforgeeks.org/lmns-cc-gq/' },
  ];

  return (
    <div className="services-container">
      {topics.map((topic, index) => (
        <a key={index} href={topic.link} className="service-box">
          <div className="service-content">
            <h3>{topic.name}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Service;
