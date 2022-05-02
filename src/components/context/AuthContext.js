/* eslint-disable no-unused-vars */
import React,{useState,useEffect,createContext} from 'react';



let AuthContext =  createContext();



export default AuthContext;

export let AuthProvider = ({children}) =>{

    let [authTokens, setAuthTokens] = useState(null);
    let [user, setUser] = useState(null);

    let loginUser = async (e)=>{
        e.preventDefault();
        console.log(`${e.target.email.value} ${e.target.password.value}`)
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