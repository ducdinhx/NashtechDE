import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';
const User = (props) => {
    const UserContructor = {
        userId: 2,
        avatar: "",
        firstName: "",
        username: "",
        lastName: "",
        email: "",
        birthday: "",
        phone: "",
        roles: []
    };

    const [user, setUser] = useState({});
    const [roles, setRoles] =useState([{}]);
    const getUser = (id) => {
        UserService.getById(id).then(res => {
            console.log(res.data);
            setUser(res.data);
            setRoles(user.roles);
            console.log(roles);
            
        }).catch(e => {
            console.log(e);
        })
    }
    useEffect(() => {
        getUser(props.match.params.id);
    }, [props.match.params.id]);

    return (
        <div className="container mt3">
            <h4 style={{ textAlign: "center", color: 'blueviolet' }}>View infomation of User</h4>
            <table class="table table-hover">
                <tr>
                    <th>Username : </th>
                    <td>{user.username}</td>
                </tr>
                <tr>
                    <th>full Name : </th>
                    <td>{user.firstName} {user.lastName}</td>
                </tr>
                <tr>
                    <th>Email : </th>
                    <td>{user.email}</td>
                </tr>
                <tr>
                    <th>Phone Numbers : </th>
                    <td>{user.phone}</td>
                </tr>

                <tr>
                    <th>Date of birth : </th>
                    <td>{user.birthday}</td>
                </tr>
                

            </table>

        </div>
    );
}

export default User;
