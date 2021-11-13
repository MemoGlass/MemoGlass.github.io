import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import NavbarOut from './NavbarOut.js'

const Login = () => {

    const adminUser = {
        email: " ",
        password: " "
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

    

    return (
        <div className="login">
            {(user.email != "") ? (
                <div>
                    <NavbarOut />
                    <h1>Welcome, Andrew</h1>
                    <h2>What would you like to do today?</h2>
                    <Dashboard />
                    
                </div>
            ) : (
                
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default Login;