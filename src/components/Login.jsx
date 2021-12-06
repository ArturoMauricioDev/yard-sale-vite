import React from 'react'

function Login() {
    return (
        <div className="form-container end">
            <form action="/">
                <label htmlFor="email" >Email address</label>
                <input
                    type="text"
                    id="email"
                    placeholder="Ingrese su email"
                    className="input " />
                <label htmlFor="password" >Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Ingrese su password"
                    className="input input-password" />
                <input type="submit"
                    value="Log in"
                    className="primary-button Login-button" />
            </form>
        </div>
    )
}

export { Login }