import React from 'react';
import './AddUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faEnvelope, faPhone, faSearchDollar, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
const AddUser = (props) => {

    const addUser = props.addUser
    //console.log(props.addUser.name);
    const sallary = addUser.reduce((sallary, addUser) => sallary + addUser.sallary, 0);

    return (
        <div>
            <div className="user-added">
                <h3>Added User : {addUser.length}</h3>
                {
                    addUser.map(user => <h4>{user.name} == ${user.sallary}</h4>)
                }
                <hr/>
                <h4>Total User Sallary : ${sallary}</h4>
            </div>
            {
                addUser.map(user => <AddedUser addUser={user}></AddedUser>)
            }
        </div>

    );
};

const AddedUser = (props) => {

    const {name,sallary,phone,email,image,job} = props.addUser;
    
    return (
        <div className="user-added">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <div className="user-info">
                <p><FontAwesomeIcon className="icon" icon={faCrosshairs} /> <small>{job}</small></p>
                <p><FontAwesomeIcon className="icon" icon={faEnvelope} /> {email}</p>
                <p><FontAwesomeIcon className="icon" icon={faPhone} /> {phone}</p>
                <p><FontAwesomeIcon className="icon" icon={faSearchDollar} /> ${sallary}</p>
            </div>
        </div>
    )
}

export default AddUser;