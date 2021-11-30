import React from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="/"> <img src={Logo} alt="Logo" style={{
                    width: 180,
                    height: 94.5,
                    margin: -10
            }}/> </a>
            <div className="links">
                
                <Link to="/aboutus">About us</Link>
                <Link to ="/login" style= {{
                    color: "white",
                    borderRadius: "7px",
                    backgroundColor: '#6abaf3'
                }}>Login</Link>
                
            </div>
        </nav>
    );
}
 
export default Navbar;