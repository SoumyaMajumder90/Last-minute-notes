import React from 'react';
import './Error.css'; // Import your CSS file

const Error = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for might be in another universe.</p>
      <img
  src={process.env.PUBLIC_URL + '/assets/sed.gif'}
  alt="coding together"
  width="400"
  height="500"
/>
    </div>
  );
};

export default Error;
