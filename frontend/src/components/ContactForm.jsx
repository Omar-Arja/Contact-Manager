import { useState } from "react";
import axios from "axios";

const ContactForm = (header) => {
    const {my_headers} = header;
    const [name, setName] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { name, phone_number, longitude, latitude };
        
        axios.post('http://localhost:8000/api/contacts/', contact, { headers: {Authorization: my_headers} })
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="create">
            <h2>Add a New Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" onChange= {(e) => setName(e.target.value) }/>
                <label>Phone Number:</label>
                <input type="text" onChange= {(e) => setPhoneNumber(e.target.value) } />
                <label>Longitude:</label>
                <input type="text" onChange= {(e) => setLongitude(e.target.value) } />
                <label>Latitude:</label>
                <input type="text" onChange= {(e) => setLatitude(e.target.value) } />
                <button type="submit">Add Contact</button>
            </form>
        </div>

    );


}

export default ContactForm;