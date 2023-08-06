import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const ContactForm = (header) => {
    const {headers} = header;
    const [name, setName] = useState(''); 
    const [phone_number, setPhone_number] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { name, phone_number, longitude, latitude };
        axios.post('http://localhost:8000/api/contacts/', contact, { headers: {Authorization: headers} })
            .then(res => {
                goToHome();
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
                <input type="text" onChange= {(e) => setName(e.target.value)}/>
                <label>Phone Number:</label>
                <input type="text" onChange= {(e) => setPhone_number(e.target.value)} />
                <label>Longitude:</label>
                <input type="text" onChange= {(e) => setLongitude(e.target.value)} />
                <label>Latitude:</label>
                <input type="text" onChange= {(e) => setLatitude(e.target.value)} />
                <div className="buttons">
                    <button type="button" className="back-btn" onClick={goToHome}>Back</button>
                    <button type="submit">Add Contact</button>
                </div>
            </form>
        </div>

    );


}

export default ContactForm;