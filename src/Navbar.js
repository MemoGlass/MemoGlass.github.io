import React from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav className="navbar">
            
            <div className="links">
            <a href="/"> <img src={Logo} alt="Logo" style={{
                    width: 205,
                    height: 94.5,
                    margin: '-10px',
                    
                   
            }}/> </a>
                
                <Link to ="/login" style= {{
                    color: "white",
                    borderRadius: "7px",
                    backgroundColor: '#6abaf3',
                    marginLeft: '900px'
                }}>Login</Link>
                
            </div>

        </nav>
       
    );
}
 
export default Navbar;