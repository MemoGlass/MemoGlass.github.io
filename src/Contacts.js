import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Dog from './pic/dog.png'
import { Link } from 'react-router-dom';
import Alex from  './pic/son.jpeg';
import William from  './pic/friend.jpeg';
import Allison from  './pic/daughter.jpeg';
import Oliver from  './pic/brother.jpeg';
import Anna from  './pic/sister.jpeg';
import Liam from  './pic/neighbour.jpeg';



const Team = () => {
    const [team] = useState([
        { name: 'Alex', position: 'Son', pic: Alex },
        { name: 'William', position: 'Friend', pic: William },
        { name: 'Allison', position: 'Daughter', pic: Allison },
        { name: 'Oliver', position: 'Brother', pic: Oliver }, 
        { name: 'Anna', position: 'Sister', pic: Anna },
        { name: 'Liam', position: 'Neighbour', pic: Liam },
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
                                <Card.Img variant="top" src={team.pic} style={{ borderRadius: '50%' , width: '250px', height: '250px', paddingTop:'10px'}} />
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