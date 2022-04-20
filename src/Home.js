import React from 'react';
import Navbar from './Navbar.js'
import glass from './glass.png'
import { Link } from 'react-router-dom';
import "./index.css";
var rootStyle = {
  backgroundColor: '#6abaf3',
  color: 'white',

  height: '100vh'
}

const Home = () => {
  return (
    <div style={rootStyle}>
      <Navbar />

      <img src={glass} alt="glass" style={{
        marginTop: '-30px',
        flex: 1,
        marginTop: '50px',
        marginLeft: '750px',
        width: '550px',
        height: '350px',

      }} />

      <div style={{
        position: 'absolute',
        color: 'white',
        top: 150,
        left: '44%',
        transform: 'translateX(-50%)',

      }}>
        <div className="hometext">
          <text>Meet</text> <br></br>
          <text>Memo.</text>

        </div>
        <div style={{ fontSize: '25px', paddingBottom: '25px', }}>
          <text >Helping Alzheimers Patients reconnect with their loved ones</text>
        </div>

        <div class="buttons">
          <Link to="/aboutus" class="button is-large">About us</Link>
          {/* <Link to="/howitworks" class="button is-large">How it works</Link>  */}
          <Link to="/team" class="button is-large">Meet the Team</Link>
        </div>
      </div>
    </div>

  );
}

export default Home;