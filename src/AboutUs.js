import { useState } from 'react';
import Navbar from './Navbar.js'
var rootStyle = {
    backgroundColor : '#6abaf3',
    color : 'white',
    height : '100%'
  }
const AboutUs = () => {
    const [about, setAbout] = useState([
        { title: 'Pitch 📊', body: 'Memory glass is a small standalone device that uses digital projection and facial recognition to help Alzheimer’s patients remember their loved ones.', id: 1 },
        { title: 'Problem/Oppurtunity 🤔', body: 'Memory Glass is aimed at patients with cognitive diseases. These individuals are generally an older demographic, so we have a large focus on making the design intuitive. Also, 80% of people over the age of 65 already wear glasses, allowing them to adopt our device into their lives with very few issues.', id: 2 },
        { title: 'Solution/Product 💡', body: 'Our device will enhance a patient’s quality of life by instantly reconnecting them to their families. It provides facial recognition to minimize stress and frustration. Memory glass also promotes social interaction within care environments between other patients or caregivers.', id: 3 },
        { title: 'Business Model 📈', body: 'Memory Glass works as a SAAS model and leased hardware Business model. The software and hardware will cost customers $50/month and provide monthly profit of 20$/month, a 40% margin.', id: 4 },
        { title: 'Market 💰', body: 'Alzheimer’s includes 6 million in the U.S market. We will market to doctors, caregivers, and Alzheimer’s family members. At 1% market penetration, the yearly revenue equates to $36 million.', id: 5 },
        { title: 'Competition 🥊', body: 'Memory Glass is a novel concept for Alzheimer’s and has no direct competitors. Although there are companies focused on smart glasses, they do not include specific features tailored to Alzheimer’s.', id: 6 },
        { title: 'Unique Features 🦄', body: 'Memory Glass is an attachment to increase modularity and reduce cost. We use cloud-based facial recognition to dramatically increase battery life and processing power of the device. Finally, it utilizes built in 5G communication to efficiently transmit relevant data.', id: 7 },
        { title: 'Go to Market Strategy 🤵', body: 'Upon diagnosis of Alzheimer’s, family members will be provided an opportunity to purchase Memory Glass for their loved ones. It will be advertised through doctors and associations. Memory is just as important to the family as it is to the patient.', id: 8 },
        { title: 'Traction 🤝', body: 'We are sending out surveys to nursing homes, doctors, patients and family members to gather valuable feedback and validation. Engineering has provided a finished prototype which will be used for small scale testing and refinement.', id: 9 },

    ])
    return (
       
        <div style={rootStyle}>
                <Navbar />
        
        <div className = 'content' >
            
        <div className="AboutUs">
            
            <h1 style={{color:'white'}}>About MemoryGlass</h1>
            {about.map((about) => (
                
                <div className="about" key={about.id}>
                    
                    <h2>{about.title}</h2>
                    <p>{about.body}</p>
                </div>
            ))}
        </div>
        </div>
        <span>&nbsp;&nbsp;</span>
        </div>
    );
}

export default AboutUs;