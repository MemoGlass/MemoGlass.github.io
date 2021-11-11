import React from 'react';
import Logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"> <img src={Logo} alt="Logo" style={{
                    width: 240,
                    height: 126,
                    margin: -10
            }}/> </a>
            <div className="links">
                
                <a href="/aboutus">About us</a>
                <a href="/login" style= {{
                    color: "white",
                    borderRadius: "7px",
                    backgroundColor: '#6abaf3'
                }}>Login</a>
                
            </div>
        </nav>
    );
}
 
export default Navbar;