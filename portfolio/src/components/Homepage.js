import worldImage from '../images/World-globe-clip-art-clipart-2-wikiclipart-wikiclipart.png'
import './Homepage.css'
import { useNavigate } from "react-router";
import welcome from '../images/welcome.jpg'

function Homepage() {
  const navigate = useNavigate();
    return (
      <div className="containerElement">
        <img id="welcomeBanner" src={welcome}/>
        <div className="homepage">
          <h1 className="HomepageElement heading1">
            Hello! I am Hamsini.
          </h1>
          <h1 className="HomepageElement heading2"> Welcome to my Portfolio world!</h1>
          <img onClick = {()=>navigate('/passportApplication')}className="HomepageElement worldImage" src={worldImage} alt='world image'></img>
          <h3 className="HomepageElement passportText" onClick={()=>navigate('/passportApplication')}> Click here to get a visual passport to tour my world!</h3>
        </div>
      </div>
    );
  }

export default Homepage;