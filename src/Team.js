import { useState } from 'react';
import Navbar from './Navbar.js'
import { Button, Card , CardGroup} from 'react-bootstrap';
import Dog from './dog.png'
const Team = () => {
    const [team] = useState([
        { name: 'John', position: 'Chief Exec Officer' },
        { name: 'Andrew', position: 'Team Member' }, 
    ])
    return (
        <div>
            <Navbar />
            <div className='content' >
                    <h1>The Memory Glass Team</h1>
                    {team.map((team) => (
                        <div className="team">
                            <CardGroup>
                            <Card style={{ width: '18rem', margin:'10px' }}>
                                <Card.Img variant="top" src={Dog} style={{ borderRadius: '50%' }} />
                                <Card.Body>
                                    <Card.Title><h2>Andrew Deros</h2></Card.Title>
                                    <Card.Text style={{ marginTop: '-30px', paddingBottom: '30px' , marginLeft:'20px'}}>
                                        <h3>Chief Exec Officer</h3>
                                        <Button variant="primary" style={{ position: 'absolute', left: '42%', top: '88%', }}><i className="fa fa-envelope" /></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' , margin:'10px'}}>
                                <Card.Img variant="top" src={Dog} style={{ borderRadius: '50%' }} />
                                <Card.Body>
                                    <Card.Title><h2>Omkaar Shenoy</h2></Card.Title>
                                    <Card.Text style={{ marginTop: '-30px', paddingBottom: '30px', marginLeft:'12px', fontSize:'15px'}}>
                                        <h3>Software Team Member</h3>
                                        <Button variant="primary" style={{ position: 'absolute', left: '42%', top: '88%', }}><i className="fa fa-envelope" /></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' , margin:'10px'}}>
                                <Card.Img variant="top" src={Dog} style={{ borderRadius: '50%' }} />
                                <Card.Body>
                                    <Card.Title><h2>{team.name}</h2></Card.Title>
                                    <Card.Text style={{ marginTop: '-30px', paddingBottom: '30px' }}>
                                        <h3>{team.position}</h3>
                                        <Button variant="primary" style={{ position: 'absolute', left: '42%', top: '88%', }}><i className="fa fa-envelope" /></Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default Team;