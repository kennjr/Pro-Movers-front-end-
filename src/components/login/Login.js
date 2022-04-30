import React from "react";
import '../../static/css/login.css'
import {Link} from 'react-router-dom';


let Login = ()=>{

    return(
        <>
            <section className='login'>
                <form action="" className="login-form">
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
                            <input type="email" name="email" id="email"  placeholder="Email" />
                        </div>
                        <div className="login-form-form-password">
                            <input type="password" name="password" id="password"  placeholder="Password" />
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