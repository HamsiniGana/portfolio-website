// import Navbar from '../components/Navigation'
import './Portfolio.css'
import { useState } from 'react';
function Portfolio() {
    const [linkState, setLinkState] = useState('');
    return (
        <div className='rootDiv'>
           <div className="Navigation">
                <nav>
                    <ul className='navUl'>
                    <li className='links linkOne' value="panel1" onClick={e=>setLinkState(e.target.value)}>About me</li>
                    <li className='links linkTwo' value="panel2" onClick={e=>setLinkState(e.target.value)}>Fun facts</li>
                    <li className='links linkThree' value="panel3" onClick={e=>setLinkState(e.target.value)}>Courses</li>
                    <li className='links linkFour' value="panel4" onClick={e=>setLinkState(e.target.value)}>Jokes</li>
                    </ul>
                </nav>
            </div>

            <div className ="sections">
                <div className="columns col1">
                    <div className="section section1" >
                        <h1 className='sectionHeadings secH1'>About me</h1>
                        <p className="descriptions d1">Hey there! I am Hamsini. A second year student studying software engineering. I have been passionate about frontend ever since I participated in my first hackathon a few months ago and managed to learn the basics of react to develop simple websites that share information about me, like this one!</p>
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

                <div className="columns col2">
                    <div className="section section3">
                        <h1 className='sectionHeadings secH3'>Comp Courses</h1>
                    </div>

                    <div className="section section4">
                        <h1 className='sectionHeadings secH4'>Jokes</h1>
                        <p className="descriptions d4"> Here are some of my favourite dad jokes:</p>
                        <ul className='jokesUl'>
                            <li className='jokes j1'>My boss said “dress for the job you want, not for the job you have.” So I went in as Batman.</li>
                            <li className='jokes j2'>What do mermaids use to wash their fins? Tide.</li>
                            <li className='jokes j3'>Hi, I’m Cliff. Drop over sometime.</li>
                            <li className='jokes j4'>What do you call the security guards for Samsung? Guardians of the galaxy.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Portfolio;