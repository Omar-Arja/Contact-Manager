

const ContactCard = ({ contact }) => {
    const { name , phone_number, longitude , latitude } = contact;

    return (
        <div className="contact-card">
            <div className="contact-card__name"><span>Name:</span> {name}</div>
            <div className="contact-card__phone_number"><span>Phone Number: </span>{phone_number}</div>
            <div className="contact-card__coordinates"><span>Longitude:</span> {longitude}</div>
            <div className="contact-card__coordinates"><span>Latitude: </span>{latitude}</div>
        </div>
    );
};

export default ContactCard;