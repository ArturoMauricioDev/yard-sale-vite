import React from 'react'

function CreateAccount() {
    return (
        <div className="login">
            <div className="form-container center">
                <h1 className="title left">My account</h1>

                <form action="/">
                    <div>
                        <label htmlFor="name" >Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Camila Yokoo"
                            className="input " />
                        <label htmlFor="email" >Email address</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="camilayokoo@gmail.com"
                            className="input " />
                        <label htmlFor="password" >Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="************"
                            className="input input-password" />
                    </div>
                    <input type="submit"
                        value="Create"
                        className="primary-button Login-button" />
                </form>
            </div>
        </div>
    )
}

export { CreateAccount }