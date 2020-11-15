import React, { useState, useEffect, Fragment } from 'react';
import { useForm } from "react-hook-form";
import AuthService from '../services/AuthService';
import PasswordChange from './PasswordChange';
import UserDetail from './UserDetail';
const ProfileUser = () => {
    //1. step 1: pre-condition: get Users have been login.
    const [user, setUser] = useState({});
    // set state isLogin for user.
    const [isLogin, setIsLogin] = useState(false);

    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
            setIsLogin(true);
        }
    }, [1])
    // view-profile left
    const ProfileViewLeft = () => {

        return (
            <div>
                <div className='card'>
                    <div className="card-header text-center">
                        <img src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png' className='avatar img-circle img-thumbnail' alt='avartar' />
                        <h6>change Profile Images</h6>
                        <input type="file" className='text-center center-block file-upload' />
                    </div>
                    <div className="card-body text-center">
                        <p><strong>Username :</strong> {user.username}</p>
                        <p><strong>Email :</strong> {user.email}</p>
                        <p><strong>Role :</strong> [{user.roles}]</p>
                    </div>
                </div>
            </div>
        )
    }
    // show info-right
    const UserViewRight = () => {
        return (
            <div className="col-sm-8">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#user-info" role="tab" aria-controls="home" aria-selected="true">User Info</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Change Password</a>
                    </li>
                </ul>

                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="user-info" role="tabpanel" aria-labelledby="home-tab">
                        <UserDetail />
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <PasswordChange />
                    </div>
                </div>

            </div>

        )
    }
    return (
        <div className='container'>
            {
                // step 1: pre conditon : check user is login or not
                isLogin ?
                    (<div className="row">
                        <div className="col-sm-4">
                            <ProfileViewLeft />
                        </div>
                        <div className="col-sm-8">
                            <UserViewRight />
                        </div>
                    </div>)
                    : null
            }
        </div>
    );
}

export default ProfileUser;
