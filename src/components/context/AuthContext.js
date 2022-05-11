/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,createContext} from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { useHistory} from 'react-router-dom'

let AuthContext =  createContext();



export default AuthContext;

export let AuthProvider = ({children}) =>{

    
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    let [loading,setLoading] = useState(true)


    let loginUser = async (e)=>{
        e.preventDefault();
        console.log(`${e.target.email.value} ${e.target.password.value}`)
        axios.post('https://promovers.herokuapp.com/login/',{
            email:e.target.email.value,
            password:e.target.password.value
        })
        .then(res=>{
            if(res.status === 200){
                setAuthTokens(res.data)
                setUser(jwt_decode(res.data.access))
                localStorage.setItem('authTokens',JSON.stringify(res.data))
                window.location.href='/'
            }else{
                alert("Something went wrong!")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    };

    let logoutUser  = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        window.location.href="/login"
    }

    let contextData={ 
        user:user,
        authTokens:authTokens,
        loginUser: loginUser,
        logoutUser:logoutUser,
    }

    let updateToken = async ()=>{
        console.log('Update token called')
        axios.post('https://promovers.herokuapp.com/login/refresh/',{
            'refresh':authTokens?.refresh
        })
        .then(res=>{
            if(res.status === 200){
                setAuthTokens(res.data)
                setUser(jwt_decode(res.data.access))
                localStorage.setItem('authTokens',JSON.stringify(res.data))
            }else{
                logoutUser()
            }
        })
        .catch(err=>{
            console.log(err)
        })
        if(loading)(
            setLoading(false)
        )
    }

    useEffect(()=>{
        if(loading){
            updateToken()
        }
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        },fourMinutes)
        return ()=>clearInterval(interval)
    },[authTokens,loading])

    return(
        <AuthContext.Provider value={contextData}>
            {loading? null :children}
        </AuthContext.Provider>
    )
};