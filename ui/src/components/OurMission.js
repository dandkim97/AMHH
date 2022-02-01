import React from 'react';
import '../style/OurMission.css';

class OurMission extends React.Component {
    render(){
        return (
            <div>
            <h2 id="top-bar">Our Mission</h2>
            <img id="main-img" src="ourMission.jpeg" alt="ourMission"/>
            <h6 className="body-text">
                "Here at Animal Mobile Helping Hands, our mission is to rescue and provide a home for all abandoned animals in the NoVa Area. 
                Dan Goodfellow's non-profit, Animal Mobile Helping Hands, is mobile trucks organization to bring animals to all community events in NoVa.  
                The trucks will provide a mobile animal adoption experience using accepted Covid health protocols.
                If you have any information about an animal in need or want to adopt a rescue, please do not
                hesistate to contact us. To get our contact information, head on over to the 'Contact Us' section
                at the top.
                Let's help Dan Goodfellow fulfill his mission: rescue and adopt every animal in NoVa." 
            </h6>
            </div>
            
        )
    }
}
export default OurMission;