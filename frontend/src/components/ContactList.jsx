import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';

const ContactList = (header) => {
    const {my_headers} = header;
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/contacts/', { headers: {Authorization: my_headers} })
            .then(res => {
                setContacts(res.data.contacts);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="contacts-list">
            {contacts.map((contact, id) => {
                return <ContactCard key={id} contact={contact}  />
            })}
        </div>
    );
}

export default ContactList;