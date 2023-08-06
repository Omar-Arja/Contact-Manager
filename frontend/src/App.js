import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import axios from 'axios';
import './style.css';

const App = () => {
  const email = 'omar@arja.com';
  const password = 'password';

  const data = new FormData();
  data.append('email', email);
  data.append('password', password);

  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    const login = async () => {
      try {
        const res = await axios.post('http://localhost:8000/api/auth/login', data);
        const token = res.data.authorisation.token;
        setHeaders('bearer ' + token);
      } catch (err) {
        console.log('Error logging in:', err);
      }
    };

    login();
  }, []);

  if (headers === null) {
    return <h2 className='app'>Loading...</h2>;
  }

  return (
    <BrowserRouter>
    <div className="app">
      <h1>Contact Manager</h1>
      <div className="contacts-container">
        <Routes>
          <Route path="/" element={<ContactList headers={headers} />} />
          <Route path="/add-contact" element={<ContactForm headers={headers} />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
};

export default App;
