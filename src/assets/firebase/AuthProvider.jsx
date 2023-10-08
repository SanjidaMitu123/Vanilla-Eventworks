/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";




export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setuser]= useState(null);

    const createUser = (email ,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{

        return signInWithEmailAndPassword(auth,email,password);
    }

     const logout = () =>{
        return signOut(auth);
     }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged( auth,currentUser =>{
            console.log('user state changed', currentUser);
            setuser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    },[])
     
    const authInfo = {
        user,
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;