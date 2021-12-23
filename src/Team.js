import { useState } from 'react';
import Navbar from './Navbar.js'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from 'react-bootstrap/Button';
const Team = () => {
    const [team, setTeam] = useState([
        { name: 'Omkaar', position: 'CEO' },
        { name: 'Andrew', position: 'My bitch' }

    ])
    return (

        <div>
            <Navbar />

            <div className='content' >

                <div className="AboutUs">

                    <h1>About MemoryGlass</h1>



                    {team.map((team) => (

                        <div className="team">
                            <CardGroup>
                            <Card style={{ width: '18rem', display: 'flex', flexDirection: 'row', flex: 1, }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title><h2>{team.name}</h2></Card.Title>
                                    <Card.Text>
                                    <h3>{team.position}</h3>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', display: 'flex', flexDirection: 'row', flex: 1, }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title><h2>{team.name}</h2></Card.Title>
                                    <Card.Text>
                                    <h3>{team.position}</h3>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            </CardGroup>

                            
                            
                        </div>


                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;