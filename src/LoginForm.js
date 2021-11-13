import React, { useState } from 'react'
import Navbar from './Navbar.js'

function LogoutForm({ Login, error }) {
    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();
        Login(details);

    }

    return ( 
        
        
        <form onSubmit={submitHandler}>
            <div>
            <Navbar />
            <div className="loginform">
            
                <h2>Login here</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={e => setDetails({ ...details, email: e.target.value })} value={details.name}
                    required
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}
                    required
                />
                

                <button type="submit">Login</button>

            </div>
            </div>
        </form>


    )
}

export default LogoutForm
