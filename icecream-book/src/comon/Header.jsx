import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import '../style.css'
import AuthService from '../services/AuthService'
import Cart from '../svg/cart.svg';
function Header(props) {
    const [user, setUser] = useState({});
    const [isUser, setIsUser] = useState(false);
    const [staffBoard, setStaffBoard] = useState(false);
    const [adminBoard, setAdminBoard] = useState(false);
    
    const [cart, setCart] = useState([{}]);
    useEffect(() => {
        setCart(props.cart);
        const userAccount = AuthService.getCurrentUser();
        if (userAccount) {
            setUser(userAccount);
            setIsUser(true);
            setAdminBoard(userAccount.roles.includes("ROLE_ADMIN"));
            setStaffBoard(userAccount.roles.includes("ROLE_STAFF"));
        }
    }, []);

    const logOutUserAccount = () => {
        AuthService.logout().then(() => {
            alert('Logout is successfully !!');
            setUser({});
        }, err => {
            alert("Error when you logout !!");
        })
    };
    const NavAdmin = () => {
        return (
            <div className="btn-group btn-group-toggle">
                <Link to={"/users"} >
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-users" aria-hidden="true">  Users Managerment</i>
                    </button>
                </Link>
                <Link to={"/product/"}>
                    <button type="button" className="btn btn-primary">
                        <i className="fa fa-book" aria-hidden="true">  Book Managerment</i>
                    </button>
                </Link>
            </div>
        )
    }
    const NavUser = () => {
        return (
            <div className="btn-group btn-group-toggle">
                <Link to={'/home'}>
                    <button type='button' className="btn btn-info">
                        <i className="fa fa-home" aria-hidden="true"> Home Page</i>
                    </button>
                </Link>
                <Link to={'/faqs'}>
                    <button type='button' className="btn btn-info">
                        <i className="fa fa-question-circle" aria-hidden="true"> FAQ</i>
                    </button>
                </Link>

            </div>
        );
    }
    const NavLoginAndRegister = () => {
        return (
            <div className="btn-group btn-group-toggle">
                <Link to={'/login'}>
                    <button type="button" className="btn btn-success">
                        <i className="fa fa-sign-in" aria-hidden="true">  Login</i>
                    </button>
                </Link>
                <Link to={'/register'}>
                    <button type="button" className="btn btn-info">
                        <i className="fa fa-user-plus" aria-hidden="true">  Register</i>
                    </button>
                </Link>
            </div>
        );
    }
    const NavSaff = () => {
        return (
            <div className='btn-group btn-group-toggle'>
                <Link to={'/orders'}>
                    <button type='button' className="btn btn-success">
                        <i className="fa fa-list-alt" aria-hidden="true"> Orders Managerment</i>
                    </button>
                </Link>
                <Link to={'/feetbacks'}>
                    <button type='button' className="btn btn-success">
                        <i className="fa fa-comments-o" aria-hidden="true"> FeetBack Managerment</i>
                    </button>
                </Link>
                <Link to={'/faqs'}>
                    <button type='button' className="btn btn-success">
                        <i className="fa fa-question-circle-o" aria-hidden="true"> FAQ Management</i>
                    </button>
                </Link>

            </div>
        );
    }
    const NavProfile = () => {
        return (
            
            <div className='btn-group btn-group-toggle'>
                <div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
                <Link to={"/profile"}>
                    <button className="btn btn-primary" type="button">
                        <i className="fa fa-user-circle" aria-hidden="true"> {user.username}</i>
                    </button>
                </Link>
                <Link to={"/login"}>
                    <button className="btn btn-primary" type="button" onClick={logOutUserAccount}>
                        <i className="fa fa-sign-out" aria-hidden="true"> Logout</i>
                    </button>
                </Link>

                

            </div>
        );
    }

    return (

        <Navbar fixed="top" bg="dark" variant="dark">
            <Link to={"/"} className="navbar-brand">
                <img src="http://localhost:3000/images/logo.png" className="img-logo" />
            </Link>
            <div className="narbar-nav mr-auto">
                <NavUser />
                {adminBoard && (<NavAdmin />)}
                {staffBoard && (<NavSaff />)}
            </div>
            <div className="navbar-nav ml-auto">
                {
                    isUser ? (<NavProfile />) : (<NavLoginAndRegister />)
                }
            </div>
        </Navbar>
    )


}



export default Header;

