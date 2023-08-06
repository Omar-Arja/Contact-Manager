

const ContactCard = ({ contact }) => {
    const { name , phone_number, longitude , latitude } = contact;

    return (
        <div className="contact-card">
            <div className="contact-card__name">Name: {name}</div>
            <div className="contact-card__phone_number">Phone Number: {phone_number}</div>
            <div className="contact-card__coordinates">Longitude: {longitude}</div>
            <div className="contact-card__coordinates">Latitude: {latitude}</div>
        </div>
    );
};

export default ContactCard;