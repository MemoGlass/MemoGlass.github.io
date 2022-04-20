import Locations from './pic/location1.png';
import { useHistory } from 'react-router-dom';
const Location = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Locate Memo</h1>
            <div id="main" class="clear">
                <div id="sidebar"> <button 
                
                > Click here to locate</button> </div>
                <div id="page-wrap"> <img src={Locations} style={{borderRadius:'10px'}}alt="Logo" /> </div>
            </div>

        </div>
    );
}

export default Location;