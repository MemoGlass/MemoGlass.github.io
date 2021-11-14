import Settings from './Settings.js'
import { Link } from 'react-router-dom';
import React from 'react'
import { render } from '@testing-library/react'


function dashboard() {

    return (

        <div className="dashboard">
            <div className="innerdash">
            
                <a href="http://localhost:3000/contacts.js"><p>Contacts</p></a>
                
                <a href="http://localhost:3000/addcontact.js"><p>Add new contact</p></a>
                
            </div>
            <div className="innerdash">
            
                <a href="http://localhost:3000/sync.js">Sync with MemoryGlass</a>
                
                <a href="http://localhost:3000/settings.js">Settings</a>
                

            </div>
        </div>

    )
}

export default dashboard
