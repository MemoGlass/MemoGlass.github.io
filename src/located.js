import Locations from './pic/location2.png';
import { useHistory } from 'react-router-dom';
const Located = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Locate Memo</h1>
            <div id="main" class="clear">
                <div id="sidebar"> <button onClick={() => history.push('/located')}> Click here to locate</button> </div>
                <div id="page-wrap"> <img src={Locations} alt="Logo" /> </div>
            </div>

        </div>
    );
}

export default Located;