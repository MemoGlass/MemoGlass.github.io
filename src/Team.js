import { useState } from 'react';
import Navbar from './Navbar.js'
import { Button, Card } from 'react-bootstrap';
import Dog from './pic/dog.png'
import Kinjal from  './pic/kinjal.jpeg'
import Chance from './pic/chance.jpg'
import Andrew from './pic/andrew.jpg'

var rootStyle = {
    backgroundColor : '#6abaf3',
    color : 'white',
    height : '100%'
  }

const Team = () => {
    const [team] = useState([
        { name: 'Andrew', position: 'Chief Exec Officer' },
        { name: 'Will', position: 'Hardware Team' },
        { name: 'Ally', position: 'Hardware Team' },
        { name: 'Omkaar', position: 'Software Team Member' }, 
        { name: 'Aditya', position: 'Software Team Member' },
        { name: 'Andrew', position: 'Software Team Member' ,pic: Andrew},
        { name: 'Chance', position: 'Software Team Member' ,pic: Chance },   
        { name: 'Kinjal', position: 'Software Team Member', pic: Kinjal },
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