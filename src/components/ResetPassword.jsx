import React from 'react'

function ResetPassword() {
    return (
        <div className="login">
            <img src="https://svgshare.com/i/c09.svg" alt="logo" />

            <div className="form-container">
                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instruccions on how to reset the password </p>

                <div className="email-image">
                    <img src="https://svgshare.com/i/c3r.svg" alt="imagen de email" />
                </div>
                <button type="button"
                    className="primary-button ResetPassword-button" >
                    Login
                </button>
                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    )
}

export { ResetPassword }