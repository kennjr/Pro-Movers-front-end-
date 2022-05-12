/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useRef,useEffect} from 'react';
import '../../static/css/register.css'
import {Link, browserHistory } from 'react-router-dom';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap';

let Register = ()=>{

    let [username, useUsername] = useState('');
    let [email, useEmail] = useState('');
    let [pwd, usePwd] = useState('');
    let [pwd2, usePwd2] = useState('');
    let [loading, useLoading] = useState(false);

    let usernameRef = useRef()
    
    let handleSubmit = e=>{
        e.preventDefault();
        if(pwd === pwd2){
            axios.post('https://promovers.herokuapp.com/register/',{
                username:username,
                email:email,
                password:pwd,
                name:username,
                acc_type:'user'
            })
            .then(res=>{
                console.log(res)
                useLoading(false)
                window.location.href = '/login'
                useUsername('')
                useEmail('')
                usePwd('')
                usePwd2('')

            })
            useLoading(true)
            
            .catch(err=>console.log(err))
        }
    };

    useEffect(()=>{
        usernameRef.current.focus()
    },[])

    return(
        <>
            { loading?
            <div className="spinner">
                {<ReactBootStrap.Spinner animation="border" variant="warning" />}
            </div>:''
            }
            <section className='register' style={{display:loading?'none':''}}>
                <form action="" className="register-form" onSubmit={handleSubmit}>
                    <article className="register-form-login">
                        <div className="register-form-login-container">
                            <div className="register-form-login-title">
                                <h1>Welcome to Register</h1>
                            </div>
                            <div className="register-form-login-dont">
                                <p>Have an account?</p>
                            </div>
                            <div className="register-form-login-button">
                                <Link to='/login'>Sign In</Link>
                            </div>
                        </div>
                    </article>
                    <article className="register-form-form">
                        <div className="register-form-form-title">
                            <h1>Sign Up</h1>
                        </div>
                        <div className="register-form-form-username">
                            <input type="text"  ref={usernameRef} placeholder="Username" value={username} onChange={(e=>useUsername(e.target.value))} required/>
                        </div>
                        <div className="register-form-form-email">
                            <input type="email"  placeholder="Email" value={email} onChange={(e=>useEmail(e.target.value))} required/>
                        </div>
                        <div className="register-form-form-password">
                            <input type="password"  placeholder="Password" value={pwd} onChange={(e=>usePwd(e.target.value))} required/>
                        </div>
                        <div className="register-form-form-password">
                            <input type="password"   placeholder="Password Confirmation" value={pwd2} onChange={(e=>usePwd2(e.target.value))} required/>
                        </div>
                        <div className="register-form-form-register">
                            <button type="submit">Sign Up</button>
                        </div>
                    </article>
                </form>
            </section>
        </>
    )

};




export default Register;