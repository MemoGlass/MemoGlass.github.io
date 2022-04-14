
import React from 'react'


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
