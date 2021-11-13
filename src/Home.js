import React from 'react';
import Navbar from './Navbar.js'

const Home = () => {
    return ( 
        <div className="home">
          <Navbar />
            <h1> This is Memory Glass </h1>
            
          Memory Glass is a startup focused on helping Alzheimers patients reconnect with those they can't remember. Our team is focused on combining technology with people with cognitive memory loss as an alternative to their current prescriptions. The  product combines smart glass technology with facial recognition in order to help identify loved ones of the patients.
        </div>
     );
}
 
export default Home;