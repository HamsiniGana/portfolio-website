import { useState } from "react";
import './PassportCreation.css'
function PassportCreation() {
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [gender, setGender] = useState('');
   return(
    <div className="container">
        {/* <div id="heading"> */}
            {/* <img id = "passportImg" src={passportClip}/> */}
            <h1>Passport application</h1>
        {/* </div> */}

        <div className="borderProperty">
            <div className = "passport name">
                    <label for="nameInput">Name:</label>
                    <input className="inputVal nameInput" type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
            </div>

            <div className= "lineSpace">
                <h1></h1>
            </div>

            <div className="passport age">
                <label for="ageInput">Age:</label>
                <input className="inputVal ageInput" type='number'
                value={age}
                onChange={e =>setAge(e.target.value)}/>
            </div>

            <div className= "lineSpace">
                <h1></h1>
            </div>
            <div className="passport gender">
                <label for="radio">Gender:</label>
                <div className="genderVal m">
                    <input className = "radioOption male" type='radio'
                    value="male"
                    checked = {gender === "male"}
                    onChange={e =>setGender(e.target.value)}/>Male
                </div>

                <div className="genderVal f">
                    <input className = "radioOption female" type='radio'
                    value="female"
                    checked = {gender === "female"}
                    onChange={e =>setGender(e.target.value)}/> Female
                </div>

                <div className="genderVal o">
                    <input className = "radioOption other" type='radio'
                    value="otherGender"
                    checked = {gender === "otherGender"}
                    onChange={e =>setGender(e.target.value)}/> Other
                </div>

                <div className="genderVal prefer">
                    <input className = "radioOption preferNotToSay" type='radio'
                    value="prefer not to say"
                    checked = {gender === "prefer not to say"}
                    onChange={e => setGender(e.target.value)}/> Prefer not to say
                </div>

                <div className= "lineSpace">
                    <h1></h1>
                </div>

                <button id="submitBtn"> Submit </button>
            </div>
        </div>
    </div>
   );
}
export default PassportCreation;