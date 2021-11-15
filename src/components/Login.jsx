import React from 'react'

function Login() {
    return (
        <div className="form-container">
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/">
                <label htmlFor="password" >Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingrese su contraseña"
                    className="input input-password" />
                <label htmlFor="new-password" >Password</label>
                <input
                    type="password"
                    id="new-password"
                    placeholder="Vuelva a ingresar su contraseña"
                    className="input input-password" />
                    <input type="submit" 
                    value="Confirm"
                    className="primary-button login-button" />
            </form>
        </div>
    )
}

export { Login }
