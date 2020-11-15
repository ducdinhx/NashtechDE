import { createContext } from 'react';
import React, { useState, useEffect } from 'react'
import AuthService from '../services/AuthService';
const AccountContext = createContext([{}, () => { }]);

const AccountProvider = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const userAcount = AuthService.getCurrentUser();
        if (userAcount) {
            setUser(userAcount);
        }
    }, [])
    return (
        <AccountContext.Provider value={[user, setUser]} >
            {props.children}
        </AccountContext.Provider>
    );

}
export { AccountContext, AccountProvider };