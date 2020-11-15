import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';


const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        console.log(data);
        AuthService.login(data).then(() => {
            history.push('/home')
            window.location.reload();
        }, error => {
            alert("your account is invalid !!");
            console.log(error);
        });
    }

    return (
            <Jumbotron className="form-wrapper">
                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="image-profile" className="profile-img-card" />
                <h2 style={{ color: "Black", textAlign: "center", fontStyle: "initial" }}>Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" placeholder="Enter your usename" ref={register({ required: "Username required !!", minLength: { value: 6, message: "username has at least 6 character !!" } })} />
                        {errors.username && <p className="errorMessage">{errors.username.message}</p>}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter your password" ref={register({ required: "password required", minLength: { value: 6, message: "password has at least 6 character !!" } })} />
                        {errors.password && <p className='errorMessage'>{errors.password.message}</p>}
                    </div>
                    <div className="submitButton">
                        <button type="submit" >Login</button>
                        <Link to="/register">
                        <small>Don't have account ? Register new account </small>
                        </Link>
                    </div>
                </form>
            </Jumbotron>

    );
}

export default Login;
