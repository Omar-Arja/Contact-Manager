import { useState } from "react";
import axios from "axios";

const ContactForm = (header) => {
    const {my_headers} = header;
    const [contact , setContact] = useState({
        name: "",
        phone_number: "",
        longitude: "",
        latitude: ""
    });

    const handleChange = (e) => {
        setContact({...contact, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
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
                <input type="text" onChange= {handleChange}/>
                <label>Phone Number:</label>
                <input type="text" onChange= {handleChange} />
                <label>Longitude:</label>
                <input type="text" onChange= {handleChange} />
                <label>Latitude:</label>
                <input type="text" onChange= {handleChange} />
                <button type="submit">Add Contact</button>
            </form>
        </div>

    );


}

export default ContactForm;