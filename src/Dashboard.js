

const dashboard = () => {
    return (
        <div className="dashboard">
            <div className="innerdash">
                <button><p>Contacts</p></button>
                <button><p>Add new contact</p></button>
            </div>
            <div className="innerdash">
                <button>Sync with MemoryGlass</button>
                <button>Settings</button>
            </div>
        </div>


    );
}

export default dashboard;