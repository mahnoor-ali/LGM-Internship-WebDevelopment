import React, { useState } from 'react'
import Navbar from './Navbar';
import Spinner from './Spinner';
import User from './User';
import DefaultView from './DefaultView';

export default function UsersCard() {


    const [loading, setloading] = useState(false);
    const [isRendered, setisRendered] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        setloading(true);
        setisRendered(true);
        let url = "https://reqres.in/api/users?page=1";
        let users = await fetch(url);
        let parsedUsers = await users.json();
        setloading(false);
        setUsers(parsedUsers.data);
    }

    return (
        <>
            <Navbar handleRequest={getUsers}/>
        <div className='container'>
            { loading && <Spinner/> }
            { !isRendered && <DefaultView/> }
        <div className='row'>
            {users.map((user) => {
                return <div className='col-md-4' key={user.id}>
                    <User Fname={user.first_name} Lname={user.last_name} email={user.email} avatar={user.avatar} />
                </div>
            })}
        </div>
        </div>
        </>
    )
}
