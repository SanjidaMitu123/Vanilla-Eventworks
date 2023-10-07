/* eslint-disable react/prop-types */
import { createContext } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const googleSingIn = () =>{
        console.log('hello')
    };
    const AuthInfo = {
        googleSingIn,
    };
    return <AuthProvider.Provider value={AuthInfo}> {children}</AuthProvider.Provider>;

};

export default AuthProvider ;
