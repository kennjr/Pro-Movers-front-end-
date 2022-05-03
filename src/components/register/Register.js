/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState,useRef,useEffect} from 'react';
import '../../static/css/register.css'
import {Link} from 'react-router-dom';



let Register = ()=>{

    let [username, useUsername] = useState('');
    let [email, useEmail] = useState('');
    let [pwd, usePwd] = useState('');
    let [pwd2, usePwd2] = useState('');
    let [role, useRole] = useState('');

    let usernameRef = useRef()
    
    let handleSubmit = e=>{
        e.preventDefault();
        console.log(`${username},${email}, ${pwd}, ${pwd2},${role}`)
        useUsername('')
        useEmail('')
        usePwd('')
        usePwd2('')
        useRole('')
    };

    useEffect(()=>{
        usernameRef.current.focus()
    },[])

    return(
        <>
            <section className='register'>
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
                        <div className="register-form-form-role">
                            <p className="register-form-form-role-title">What is your role? </p>
                            <div className="register-form-form-role-container">
                                <div className="register-form-form-role-user">
                                    <input type="radio" name="role" id="role" value='user' onChange={e=>useRole(e.target.value)} required/>
                                    <p>User</p>
                                </div>
                                <div className="register-form-form-role-mover">
                                    <input type="radio" name="role" id="role" value='mover' onChange={e=>useRole(e.target.value)} required/>
                                    <p>Mover</p>
                                </div>
                            </div>
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