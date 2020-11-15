import React, { useState, useEffect } from 'react';
import '../style.css'
import { Switch, Route } from "react-router-dom";
import Login from '../account/Login';
import Register from '../account/Register'
import ProfileUser from '../user/ProfileUser';
import ListUser from '../user/ListUser';
import User from '../user/User';
import ListFAQ from '../faq/ListFAQ'
import Product from '../product/Product'
import AuthService from '../services/AuthService'
import Wellcome from '../comon/Wellcome'
import ProductsList from '../product/ProductsList'
import ViewFAQ from '../faq/ViewFAQ';
import CreateFAQ from '../faq/CreateFAQ';
import ProductPage from '../product/ProductPage';
import Cart from '../product/Cart';
const Body = (props) => {
    // Kiểm tra và phân quyền cho user hiện hiện tại trong phần body.
    const [user, setUser] = useState({});
    const [isUser, setIsUser] = useState(false);
    const [staffBoard, setStaffBoard] = useState(false);
    const [adminBoard, setAdminBoard] = useState(false);

    const [listProducts, setListProduct] = useState();
    const [cart, setCart] = useState([{}])
    

    const addCart = props.addCart;
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


    return (
        <div className="wrapper ">
            <Switch>
                {isUser ? (
                    <section>
                        <Route path={["/home", "/"]} exact>
                            <ProductPage cart={cart} addCart={addCart}/>
                        </Route>
                        <Route path={'/cart'} exact>
                            <Cart cart={cart} />
                        </Route>  
                        <Route path={"/profile"} exact component={ProfileUser} />
                        <Route path="/user/:id" exact component={User} />
                        <Route path="/addBook" exact component={Product} />
                        <Route path={"/faqs"} exact component={ListFAQ} />
                        <Route path="/add-faq/:id" component={CreateFAQ}></Route>
                        <Route path="/view-faq/:id" component={ViewFAQ}></Route>
                        {
                            adminBoard && (
                                <div>
                                    <Route path={"/users"} exact component={ListUser} />
                                    <Route path={"/product"} exact component={ProductsList} />
                                </div>

                            )
                        }
                    </section>
                ) : (
                        <section>
                            <Route path={['/', '/home']} exact component={Wellcome} />
                            <Route path={'/login'} exact component={Login} />
                            <Route path={"/register"} exact component={Register} />
                        </section>
                    )
                }

            </Switch>

        </div>
    );
}

export default Body;
