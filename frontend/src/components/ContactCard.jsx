

const ContactCard = ({ contact }) => {
    const { name , phone_number, longitude , latitude } = contact;

    return (
        <div className="contact-card">
            <div className="contact-card__name">{name}</div>
            <div className="contact-card__phone_number">{phone_number}</div>
            <div className="contact-card__longitude">{longitude}</div>
            <div className="contact-card__latitude">{latitude}</div>
        </div>
    );
};