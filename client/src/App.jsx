// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import  About  from './pages/About';
import  Contact  from './pages/Contact';
import Service  from './pages/Service';
import Register from './pages/Register';
import  Login  from './pages/Login';
import Navbar from './components/Navbar'; // Import as default export
import Error from './pages/Error';
import Footer from './components/Footer';
import {Logout} from './pages/Logout';
import { AdminLayout } from './components/layouts/Admin-Layout';
import  AdminUsers  from './pages/AdminUsers';
import  AdminContacts  from './pages/AdminContacts';
import DataStructure from './service/data-structure';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="data-structure" element={<DataStructure />} />
         
          <Route path="/admin" element={<AdminLayout/>}>
            
          <Route path="users" element={<AdminUsers />} />
          
        

            </Route> 
        </Routes>
        <Footer></Footer>
      </React.Fragment>
    </Router>
  );
};

export default App;
