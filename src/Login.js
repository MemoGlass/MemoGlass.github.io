import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {

    const adminUser = {
        email: "admin@memoryglass.com",
        password: "admin123"
    }
    const [user, setuser] = useState({ email: "" });
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);
        if (details.email == adminUser.email && details.password == adminUser.password) {
            console.log("Logged in")
            setuser({
                email: details.email

            })
        }
        else {
            console.log("Details do not match")
            setError("⚠️ Email or password is incorrect ⚠️")
        }
    }

    const Logout = e => {
        window.location.reload(false);
        setTimeout(() => {
            setuser({ email: "" })

        }, 1000)


    }

    return (
        <div className="login">
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, Andrew</h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default Login;