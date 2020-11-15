import { useForm } from "react-hook-form";
import AuthService from '../services/AuthService';
import React from 'react'
import { Link } from "react-router-dom";
const Register = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        AuthService.register(data).then(() => {
            alert("You register successfully !!");
        }, error => {
            console.log(error);
        });
    }

    return (
        <React.Fragment>
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" placeholder="Enter your usename" ref={register({ required: "Username required !!", minLength: { value: 6, message: "username has at least 6 character !!" } })} />
                        {errors.username && <p className="errorMessage">{errors.username.message}</p>}
                    </div>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" placeholder="First Name" ref={register({ minLength: { value: 3, message: "first name has at least 3 character !!" } })} />
                        {errors.firstname && <p className='errorMessage'>{errors.firstname.message}</p>}
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name" ref={register({ required: "Last Name required !!", mminLength: { value: 6, message: "Last name has at least 6 character !!" } })} />
                        {errors.lastname && <p className='errorMessage'>{errors.lastname.message}</p>}
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" ref={register({ required: "email required !!", minLength: { value: 15, message: "email has at least 6 character !!" } })} />
                        {errors.email && <p className='errorMessage'>{errors.email.message}</p>}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" ref={register({ required: "password required", minLength: { value: 6, message: "password has at least 6 character !!" } })} />
                        {errors.password && <p className='errorMessage'>{errors.password.message}</p>}
                    </div>
                    <div className="submitButton">
                        <button type="submit" >Create Account</button>
                        <Link to="/login">
                            <small>Already Have an Account?</small>
                        </Link>

                    </div>
                </form>
            </div>

        </React.Fragment>
    );
}

export default Register;
