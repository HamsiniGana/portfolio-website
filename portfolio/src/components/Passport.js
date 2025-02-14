import './Passport.css'
import profile from '../images/pfp.jpg'
import visa from '../images/approvedStamp.jpg'
import { useLocation } from "react-router";
function Passport () {
    const location = useLocation();
    const {name, age, gender} = location.state;
    return(
        <div className="passportContainer">
            <h1 id="passportHeading">Passport</h1>
            <div className='passport'>
                <img id="profilePic" src={profile} />
                <h3 className='elements name'>Name: {name}</h3>
                <h3 className='elements age'>Age:{age}</h3>
                <h3 className='elements gender'>Gender: {gender}</h3>
            </div>

            <img id = "stampPic" src={visa}/>
            <button className="nxtBtn">Next</button>
        </div>
    );
}
export default Passport;