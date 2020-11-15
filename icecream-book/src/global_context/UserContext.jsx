import React, {useState, createContext} from 'react';
const UserContext = createContext();
import React from 'react';

const UserProvider = (props) => {
    const [users, setUsers] = useState([{}]);
    return (
        <div>
            <UserContext.Provider value ={[users, setUsers]}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
}

export {UserContext, UserProvider};
