/* eslint-disable no-unused-vars */
import React,{useState,useEffect,createContext} from 'react';

import axios from 'axios';


let AuthContext =  createContext();



export default AuthContext;

export let AuthProvider = ({children}) =>{

    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);

    let loginUser = async (e)=>{
        e.preventDefault();
        console.log(`${e.target.email.value} ${e.target.password.value}`)
        axios.post('https://api-promovers.herokuapp.com/login/',{
            username:e.target.email.value,
            password:e.target.password.value
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    };

    let contextData={ 
        loginUser: loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
};