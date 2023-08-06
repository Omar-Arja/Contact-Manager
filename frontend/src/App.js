import React, { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import axios from 'axios';
import './style.css';
import ContactForm from './components/ContactForm';

const App = () => {
  const email = 'omar@arja.com';
  const password = 'password';

  const data = new FormData();
  data.append('email', email);
  data.append('password', password);

  const [my_headers, setHeaders] = useState(null);

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

  if (my_headers === null) {
    return <h2 className='app'>Loading...</h2>;
  }

  return (
    <div className="app">
      <h1>Contact Manager</h1>
      <div className="contacts-container">
        <ContactForm my_headers={my_headers} />
        </div>
    </div>
  );
};

export default App;
