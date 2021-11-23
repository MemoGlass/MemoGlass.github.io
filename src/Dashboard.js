import Settings from './Settings.js'
import { Link } from 'react-router-dom';
import React from 'react'
import { render } from '@testing-library/react'


function Dashboard() {

    return (

        <div className="dashboard">
            <div className="innerdash">
            
                <a href="http://localhost:3000/contacts"><p>Contacts</p></a>
                
                <a href="http://localhost:3000/addcontact"><p>Add new contact</p></a>
                
            </div>
            <div className="innerdash">
            
                <a href="http://localhost:3000/sync">Sync with MemoryGlass</a>
                
                <a href="http://localhost:3000/settings">Settings</a>
                

            </div>
        </div>

    )
}

export default Dashboard
