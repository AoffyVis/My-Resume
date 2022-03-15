import PropTypes from 'prop-types'; // ES6

const ContactList = ({id, email, Message}) => {
    return (
        <div>
            <p>{email}</p>
            <p>{Message}</p>
        </div>
    );
}

ContactList.propTypes = {
    id:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    Message:PropTypes.string.isRequired,
}

export default ContactList