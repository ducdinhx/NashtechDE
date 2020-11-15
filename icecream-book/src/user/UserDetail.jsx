import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import { useForm } from "react-hook-form";
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

export default function UserDetail() {
    const userDetail = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender: true,
        birthday: '',
        roles:[]
    }
    const [disableUpdate, setDisableUpdate] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        const userAccount = AuthService.getCurrentUser();
        console.log(userAccount.id);
        const userInfo = UserService.getById(userAccount.id).then((res) => {
            console.log(res.data);
            setCurrentUser(res.data);
        }).catch(e => {
            console.log(e);
        });


    }, [])


    const allowUpdate = () => {
        setDisableUpdate(false);
    }
    const preventUpdate = () => {
        setDisableUpdate(true);

    }
    const [birthday, setBirthday] = useState(new Date);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = () => {

    }
    return (
        <div>
            <h6 style={{ textAlign: 'center' }}>USER INFO</h6>
            <form onSubmit={handleSubmit(onSubmit)} className="form" id="registrationForm">
                <div className="form-group">
                    <div className="col-xs-6">
                        <label htmlFor="first_name"><strong>First name</strong></label>
                        <input type="text" className="form-control" name="firstname" id="firstname" placeholder="first name" title="enter your first name if any." disabled={disableUpdate} value={currentUser.firstName}
                            ref={register({ required: "firstname is required !!", minLength: { value: 6, message: " has at least 6 character !!" } })} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-xs-6">
                        <label htmlFor="last_name"><strong>Last name</strong></label>
                        <input type="text" className="form-control" name="last_name" id="lastname" placeholder="last name" title="enter your last name if any." disabled={disableUpdate} value={currentUser.lastName}
                            ref={register({ required: "old pass  required !!", minLength: { value: 6, message: " has at least 6 character !!" } })} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-xs-6">
                        <label htmlFor="phone"><strong>Phone</strong></label>
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." disabled={disableUpdate} value={currentUser.phone}
                            ref={register({ required: "old pass  required !!", minLength: { value: 6, message: " has at least 6 character !!" } })} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-xs-6">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." disabled={disableUpdate} value={currentUser.email}
                            ref={register({ required: "old pass  required !!", minLength: { value: 6, message: " has at least 6 character !!" } })} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-xs-12">
                        <label htmlFor="birthday"><strong>Birthday</strong></label>
                        
                    </div>
                </div>
                

                <div className="form-group">
                    <div className="col-xs-12">
                        <button className="btn btn-lg btn-primary" type="submit" onClick={allowUpdate}><i className="glyphicon glyphicon-ok-sign"></i> Update</button>
                        <button className="btn btn-lg btn-success" type="submit" onClick={preventUpdate}><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                        <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button>
                    </div>
                </div>

            </form>
        </div >
    )

}
