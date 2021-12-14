import React from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const NavbarOut = () => {
    return (
        <div className = "content">
        <nav className="navbar">
            <a href="/"> <img src={Logo} alt="Logo" style={{
                    width: 205,
                    height: 94.5,
                    margin: -10
            }}/> </a>
            <div className="links">
                <Link to ="/" style= {{
                    color: "white",
                    borderRadius: "7px",
                    backgroundColor: '#6abaf3'
                }}>Logout</Link>
                
            </div>
        </nav>
        </div>
    );
}
 
export default NavbarOut;