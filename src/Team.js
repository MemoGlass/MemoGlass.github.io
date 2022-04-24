import { useState } from 'react';
import Navbar from './Navbar.js'
import { Button, Card } from 'react-bootstrap';
import Kinjal from  './pic/kinjal.jpeg';
import Andrew from './pic/useandrew.jpeg';
import AndrewFishell from  './pic/andrew2.jpeg';
import Alyssa from  './pic/Alyssa.jpeg';
import Sid from  './pic/Sid.jpeg';
import Andres from  './pic/andres.jpeg';
import Aditya from  './pic/Aditya.jpeg';
import Chance from  './pic/chance.jpeg';
import Abhinav from  './pic/Abhinav.jpeg';
import Brooke from  './pic/Brooke.jpeg'; 

var rootStyle = {
    backgroundColor : '#6abaf3',
    color : 'white',
    height : '100%'
  }

const Team = () => {
    const [team] = useState([
        { name: 'Andrew', position: 'Chief Exec Officer', pic: Andrew },
        { name: 'Will', position: 'Hardware Team' },
        { name: 'Alyssa', position: 'Hardware Team', pic: Alyssa },
        { name: 'Sid', position: 'Hardware Team', pic: Sid },
        { name: 'Andres', position: 'Hardware Team', pic: Andres  },
        { name: 'Omkaar', position: 'Software Team Member' }, 
        { name: 'Aditya', position: 'Software Team Member', pic: Aditya },
        { name: 'Andrew', position: 'Software Team Member', pic: AndrewFishell  },
        { name: 'Chance', position: 'Software Team Member', pic: Chance },   
        { name: 'Kinjal', position: 'Software Team Member', pic: Kinjal },
        { name: 'Abhinav', position: 'Software Team Member', pic: Abhinav  },
        { name: 'Brooke', position: 'Software Team Member', pic: Brooke  }, 
    ])
    return (
        <div style={rootStyle}>
            <Navbar />
            <div className='content' >
                    <h1 style={{color:'white', fontSize:'40px', fontWeight:'bolder'}}>The Memory Glass Team</h1>
                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                    {team.map((team) => (
                        <div className="team">
                            <Card style={{ width: '18rem', margin: '10px' }}>
                                <Card.Img variant="top" src={team.pic} style={{ borderRadius: '50%' , width: '250px', height: '250px', paddingTop:'10px'}} />
                                <Card.Body>
                                    <Card.Title><h2>{team.name}</h2></Card.Title>
                                    <Card.Text style={{ marginTop: '-30px', paddingBottom: '30px', fontSize:'15px' }}>
                                        <h3>{team.position}</h3>
                                        
                                        <Button  variant="primary" style={{ position: 'absolute', left: '42%', top: '88%', }}><i className="fa fa-envelope" /></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    </div>
            </div>
        </div>
    );
}
export default Team;