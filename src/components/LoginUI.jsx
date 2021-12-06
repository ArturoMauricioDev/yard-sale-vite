import React from 'react'
import { Login } from "./Login"

function LoginUI() {
    return (
        <div className="login">
            <img src="https://svgshare.com/i/c09.svg" alt="logo" />
            <Login />
            <div className="form-container start">
                <a href="/">Forgot my password</a>
                <button className="secondary-button sign-upbutton" >Sing up</button>
            </div>
        </div>
    )
}

export { LoginUI }