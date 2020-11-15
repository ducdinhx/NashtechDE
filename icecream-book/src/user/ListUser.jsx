import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import UserService from "../services/UserService";

const ListUser = () => {
    const [users, setUsers] = useState([{}]);
        const [textSearch, setTextSearch] = useState("");

        useEffect(() => {
            retrieveUsers();
        }, [])

        // event onchange on text serch
        const onChangeSearchTitle = e => {
            const textSearch = e.tartget.value;
            setTextSearch(textSearch);
        };


        // Userservice get all user.
        const retrieveUsers = () => {
            UserService.getAll().then((res) => {
                console.log(res.data);
                setUsers(res.data);
            }).catch(e => {
                console.log(e);
            })
    }

    return (
        <div className="row">
            <div className="col-md-8 offset-1">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search by name" value={textSearch} onChange={onChangeSearchTitle} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="container-fluid offset-0">
                <table className="table table-bordered table-hover table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>user Id</th>
                            <th>Username</th>
                            <th>Avatar</th>
                            <th>First name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Enable</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.username}</td>
                                    <td>
                                        <img src={user.avatar} alt="Hinh anh" width="50px" height ="50px"/>
                                    </td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={user.enable} />
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-info">
                                            <Link to={"/user/" + user.userId}>
                                                View Detail
                                            </Link>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ListUser;
