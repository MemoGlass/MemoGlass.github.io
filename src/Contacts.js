import { useState } from 'react';

import { Button, Card } from 'react-bootstrap';
import Dog from './pic/dog.png'
import { Link } from 'react-router-dom';



const Team = () => {
    const [team] = useState([
        { name: 'Andrew', position: 'Son' },
        { name: 'Will', position: 'Friend' },
        { name: 'Ally', position: 'Daughter' },
        { name: 'Omkaar', position: 'Neighbour' }, 
        { name: 'Aditya', position: 'Friend' },
        { name: 'Chance', position: 'Software Team Member' },
    ])
    return (
       

            <div className='contactcontent' >
                    
                    <div style={{display:'flex', flexWrap: 'wrap'}}>
                    <Link to ="/login" style= {{
                    color: "white",
                    borderRadius: "7px",
                    backgroundColor: '#6abaf3',
                    marginLeft: '850px',
                    padding: '10px'
                }}>+ New Contact</Link>
                    {team.map((team) => (
                        <div className="cteam">
                            
                            <Link to={'/contact'}>
                            <Card style={{ width: '18rem', margin: '10px' }}>
                                <Card.Img variant="top" src={Dog} style={{ borderRadius: '50%' , width: '250px', height: '250px', paddingTop:'10px'}} />
                                <Card.Body>
                                    <Card.Title><h2>{team.name}</h2></Card.Title>
                                    <Card.Text style={{ marginTop: '-30px', paddingBottom: '30px', fontSize:'15px' }}>
                                        <h3>{team.position}</h3>
                                        
                                        <Button  variant="primary" style={{ position: 'absolute', left: '42%', top: '88%', }}><i className="fa fa-envelope" /></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Link>
                        </div>
                    ))}
                    </div>
            </div>
        
    );
}
export default Team;