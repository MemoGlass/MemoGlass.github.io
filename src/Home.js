import React from 'react';
import Navbar from './Navbar.js'
import Banner from './banner.png'
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
        <div className="home">
          <Navbar />
          <div>
          <img src={Banner} alt="Banner" style={{
            marginTop: '-75px',
              flex: 1,
              width: '100%',
              height: '100%',
              alignItems: "stretch",
              resizeMode: 'contain',
            }}/>
        
        
            <div style={{
                          position: 'absolute', 
                          color: 'white', 
                          top: 150, 
                          left: '44%', 
                          transform: 'translateX(-50%)'
                        }}>
            <div className="hometext">
            <text> Memory Glass</text>
            
            </div>
            <div style={{fontSize:'25px', paddingBottom:'25px'}}>
            <text >Helping Alzheimers Patients reconnect with their loved ones</text>
            </div>
            
            <div class="buttons">
            <Link to="/aboutus" class="button is-large">About us</Link> 
            <Link to="/team" class="button is-large">Meet the Team</Link>
            </div>
            

            </div>
          

      </div>
          
    
        
        </div>
     );
}
 
export default Home;