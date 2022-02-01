import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../style/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PetList from './PetList';
import OurMission from './OurMission';
import ContactUs from './ContactUs';
import UploadPet from './UploadPet';
import Navbar from './Navbar';

function App() {
  
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/home" component={PetList} />
        <Route path="/ourMission" component={OurMission} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/uploadPet" component={UploadPet} />
      </div>
    </Router>
  );
}
export default App;
