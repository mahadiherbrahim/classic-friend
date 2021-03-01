import React from 'react';
import userData from '../../Data/data.json';
import { useEffect, useState } from 'react';
import User from '../User/User';
import './UserList.css'
import AddUser from '../AddUser/AddUser';
const UserList = () => {

    const [users, Setusers] = useState([]);
    const [addUsers, SetAddUsers] = useState([]);

    useEffect(() => {
        Setusers(userData);
    }, [])
    
    const handleAddEvent = (user) => {
        const newAdduser = [...addUsers,user];
        SetAddUsers(newAdduser);
    }

    return (
        <div className="user-container">
            <div className="users">
                {
                    users.map(user => <User user={user} key={user.id} handleAddEvent={handleAddEvent}></User>)
                }
            </div>
            <div className="add-user">
                <AddUser addUser={addUsers}></AddUser>
            </div>
        </div>
    );
};

export default UserList;