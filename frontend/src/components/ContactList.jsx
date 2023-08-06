import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import { useNavigate } from "react-router-dom"

const ContactList = (header) => {
    const {headers} = header;
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    const goToAddForm = () => {
        navigate('/add-contact');
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/contacts/', { headers: {Authorization: headers} })
            .then(res => {
                setContacts(res.data.contacts);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="contacts-list">
            <button onClick={goToAddForm} className='add-btn'>Add</button>
            {contacts.map((contact, id) => {
                return <ContactCard key={id} contact={contact}  />
            })}
        </div>
    );
}

export default ContactList;