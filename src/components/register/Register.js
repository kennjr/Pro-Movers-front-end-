import React from 'react';
import '../../static/css/register.css'
import {Link} from 'react-router-dom';



let Register = ()=>{

    return(
        <>
            <section className='register'>
                <form action="" className="register-form">
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
                            <input type="text" name="username" id="username" placeholder="Username" />
                        </div>
                        <div className="register-form-form-email">
                            <input type="email" name="email" id="email"  placeholder="Email" />
                        </div>
                        <div className="register-form-form-password">
                            <input type="password" name="password" id="password"  placeholder="Password" />
                        </div>
                        <div className="register-form-form-password">
                            <input type="password" name="password2" id="password2"  placeholder="Password Confirmation" />
                        </div>
                        <div className="register-form-form-role">
                            <p className="register-form-form-role-title">What is your role? </p>
                            <div className="register-form-form-role-container">
                                <div className="register-form-form-role-user">
                                    <input type="radio" name="role" id="role" />
                                    <p>User</p>
                                </div>
                                <div className="register-form-form-role-mover">
                                    <input type="radio" name="role" id="role" />
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