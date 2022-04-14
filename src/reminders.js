import '@fortawesome/fontawesome-free/css/all.min.css'
import { Link } from 'react-router-dom';

const Reminder = () => {
    return (
        <div>
                 <Link to ="/login" style= {{
                    color: "white",
                    borderRadius: "7px",
                    backgroundColor: '#6abaf3',
                    
                    marginLeft: '845px',
       
                    padding: '10px'
                }}>+ New Reminder</Link>
                <div>&nbsp;</div>
        <div className="box">
            <div className="lalign">
                Take Medicine
            </div>
            <div className="ralign">
            <i class="fa-solid fa-sliders-simple"></i>
            
            <i class="fa fa-toggle-on"></i>
            {'                  ' }&nbsp;
            12:00
            </div>
        </div>
        <div className="box">
            <div className="lalign">
                Water the plants
            </div>
            <div className="ralign">
            <i class="fa-solid fa-sliders-simple"></i>
            
            <i class="fa fa-toggle-on"></i>
            {'                     ' }{'                     ' }&nbsp;
            17:00
            </div>
        </div>
        <div className="box">
            <div className="lalign">
                Feed the dog
            </div>
            <div className="ralign">
            <i class="fa-solid fa-sliders-simple"></i>
            
            <i class="fa fa-toggle-on"></i>
            {'                  ' }&nbsp;
            20:00
            </div>
        </div>
        </div>
    );
}

export default Reminder;