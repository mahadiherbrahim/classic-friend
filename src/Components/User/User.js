import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelope, faPhone, faSearchDollar, faCrosshairs } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {

    const { name, phone, email, image, job, sallary } = props.user;
    const handleAddEvent = props.handleAddEvent;
    return (
        <div className="user">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <div className="user-info">
                <p><FontAwesomeIcon className="icon" icon={faCrosshairs} /> <small>{job}</small></p>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> {email}</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} /> {phone}</p>
                <p><FontAwesomeIcon className="icon" icon={faSearchDollar} /> ${sallary}</p>
            </div>
            <button onClick={() => { handleAddEvent(props.user) }}><FontAwesomeIcon icon={faUserPlus} /> Add User</button>
        </div>
    );
};

export default User;