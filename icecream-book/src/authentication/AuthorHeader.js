import React from 'react';
const AuthorHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        return {
            Authorization: 'Bearer ' + user.token
        };
    } else {
        return {};
    }
}
export default AuthorHeader;


