import { useState } from 'react';

export default function useToken() {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        console.log("userToken.ts token value" + (tokenString === null) ? "" : tokenString );
        return (tokenString === null) ? "" : tokenString;
        
    };


   const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    const logout = () => {
        setToken("");
    };

    return {
        setToken: saveToken,
        logout: logout,
        token
    }
}
