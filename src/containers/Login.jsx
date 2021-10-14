import React from 'react'
import '../styles/global.css';
import '../styles/Login.scss';
const Login = () => {
    return(
        <div className="login">
            <div className="form-container">
                <img class="logo" src="./../logos/logo_yard_sale.svg" alt="logo" />
                <h1 class="title">Create a new password</h1>
                <p class="subtitle">Enter a new password for your account</p>
                <form action="/" class="form">
                    <label for="email" class="label">Email address</label>
                    <input type="email" name="email" id="email" placeholder="email@gmail.com" class="input input-email" />

                    <label for="password" class="label">Password</label>
                    <input type="password" name="password" id="password" placeholder="********" class="input input-password" />

                    <input type="submit" value="Log in" class="primary-button login-button" />

                    <a href="/">Forgot my password</a>
                    <button class="secondary-button signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Login;