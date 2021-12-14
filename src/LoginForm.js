import React, { useState } from 'react'
import Navbar from './Navbar.js'
import Banner from './banner.png'
import '@fortawesome/fontawesome-free/css/all.min.css'

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
                <img src={Banner} alt="Banner" style={{
                    marginTop: '-30px',
                    flex: 1,
                    width: '100%',
                    height: '100%',
                    alignItems: "stretch",
                    resizeMode: 'contain',
                }} />
                <div style={{
                    position: 'absolute',
                    color: 'white',
                    top: 150,
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <div className="loginform">

                        <h2>Login here</h2>
                        {(error != "") ? (<div className="error">{error}</div>) : ""}


                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.name} />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="Password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}/>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>


                        <button class="button is-rounded" type="submit">Login</button>
                        
                        
                    </div>
                </div>
            </div>
        </form>


    )
}

export default LogoutForm
