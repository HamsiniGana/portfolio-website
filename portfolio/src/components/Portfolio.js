// import Navbar from '../components/Navigation'
import './Portfolio.css'
import { useState } from 'react';
import { useRef } from 'react';
import pic from '../images/profilePic.gif'
import crochet from '../images/crochet.gif'
import laugh from '../images/laugh.gif'
function Portfolio() {
    const [linkState, setLinkState] = useState('');
    const jokesRef = useRef(null);
    const factsRef = useRef(null);
    const aboutRef = useRef(null);
    return (
        <div className='rootDiv'>
           <div className="navigation">
                <nav>
                    <ul className='navUl'>
                    <li className='links linkOne' onClick={() => aboutRef.current.scrollIntoView({behaviour: 'smooth'})}>About me</li>
                    <li className='links linkTwo' onClick={() => factsRef.current.scrollIntoView({behaviour: 'smooth'})}>Fun facts</li>
                    <li className='links linkFour'  onClick={() => jokesRef.current.scrollIntoView({behaviour: 'smooth'})}>Jokes</li>
                    </ul>
                </nav>
            </div>

            <div className ="sections">
                <div ref={aboutRef}className='columns col1'>
                    <div className="section section1" >
                        <h1 className='sectionHeadings secH1'>About me</h1>
                        <p className="descriptions d1">Hey there! I am Hamsini, a second year student studying Software Engineering. I have been passionate about frontend development ever since I participated in my first hackathon a few months ago. So far, I have managed to learn the basics of react to develop simple websites that share information about myself - like this one!</p>
                    </div>

                    <div className="imgs img1" >
                        <img id="profileGif" src={pic}/>
                    </div>
                </div>

                    <div ref={factsRef} className='columns col2'>
                        <div className="imgs img2" >
                            <img id="crochetGif" src={crochet}/>
                        </div>
                        <div className="section section2">
                            <h1 className='sectionHeadings secH2'>Fun facts</h1>
                            <p className="descriptions d2"> Here are some fun facts about me :)</p>
                            <ul className='factsUl'>
                                <li className='facts f1'>Crochet addict</li>
                                <li className='facts f2'>Expert baker</li>
                                <li className='facts f3'>Lepidopterophobic (For those of you who don't know, I'm afraid of butterflies T-T )</li>
                                <li className='facts f4'>Avid painter</li>
                            </ul>
                        </div>
                    </div>

                    <div className='columns col3' ref={jokesRef}>
                    <div className="section section3">
                        <h1 className='sectionHeadings secH4'>Jokes</h1>
                        <p className="descriptions d4"> Here are some of my favourite dad jokes:</p>
                        <ul className='jokesUl'>
                            <li className='jokes j1'>My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.</li>
                            <li className='jokes j2'>What do mermaids use to wash their fins? Tide.</li>
                            <li className='jokes j3'>Hi, I’m Cliff. Drop over sometime.</li>
                            <li className='jokes j4'>What do you call the security guards for Samsung? Guardians of the galaxy.</li>
                        </ul>
                    </div>

                    <div className="imgs img3" >
                            <img id="laughGif" src={laugh}/>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default Portfolio;