import React from 'react';
import '../styles/RecoveryPassword.scss';


const RecoveryPassword = () =>{
    return(
        <div className="login">
        <div className="form-container">
            <img class="logo" src="./../logos/logo_yard_sale.svg" alt="logo" />
            <h1 class="title">Create a new password</h1>
            <p class="subtitle">Enter a new password for your account</p>
            <form action="/" class="form">
                <label for="password" class="label">Password</label>
                <input type="password" name="password" id="password" placeholder="********" class="input input-password" />

                <label for="new-password" class="label">Password</label>
                <input type="password" name="new-password" id="new-password" placeholder="********" class="input input-password" />

                <input type="submit" value="Confirm" class="primary-button login-button" />
            </form>
        </div>
    </div>
    );
}

export default RecoveryPassword;