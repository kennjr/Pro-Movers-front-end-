/* eslint-disable react-hooks/rules-of-hooks */

import React,{useState, useEffect, useRef,useContext} from "react";
import '../../static/css/login.css'
import AuthContext from "../context/AuthContext";
import {Link} from 'react-router-dom';


let Login = ()=>{

    let {loginUser} = useContext(AuthContext);

    let [email, useEmail] = useState('')
    let [pwd, usePwd] = useState()

    let emailRef = useRef()

    useEffect(()=>{
        emailRef.current.focus()
    },[])

    let getEmail = e =>{
        useEmail(e.target.value)
    };

    let getPwd = e =>{
        usePwd(e.target.value)
    };


    return(
        <>
            <section className='login'>
                <form  className="login-form" onSubmit={loginUser}>
                    <article className="login-form-register">
                        <div className="login-form-register-container">
                            <div className="login-form-register-title">
                                <h1>Welcome to Login</h1>
                            </div>
                            <div className="login-form-register-dont">
                                <p>Don't have an account?</p>
                            </div>
                            <div className="login-form-register-button">
                                <Link to='/register'>Sign Up</Link>
                            </div>
                        </div>
                    </article>
                    <article className="login-form-form">
                        <div className="login-form-form-title">
                            <h1>Sign In</h1>
                        </div>
                        <div className="login-form-form-email">
                            <input type="email" ref={emailRef} name="email" id="email"  placeholder="Email" value={email} onChange={getEmail} required />
                        </div>
                        <div className="login-form-form-password">
                            <input type="password" name="password" id="password"  placeholder="Password"value={pwd} onChange={getPwd} required />
                        </div>
                        <div className="login-form-form-login">
                            <button type="submit">Sign In</button>
                        </div>
                    </article>
                </form>
            </section>
        </>
    )

};



export default Login;