import React from 'react'
import Typical from'react-typical'
import nodeImage from './images/node.png'
import pyImage from './images/python.png'
import cssImage from './images/css.png'
import reactImage from './images/react.png'
import mongodbImage from './images/mongodb.png'
import htmlImage from './images/html.png'
import jsImage from './images/js.png'
import expressImage from './images/express.png'
import dp from './images/dp.jpeg'
function Home() {
    return (
        <>
            <div className="App-header"> 
                <div className="heading">
                <h1>I am Ayush Tiwari</h1>
                <p>
                I'm a {' '}
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Web Developer',
                    1000,
                    'Student ',
                    1000,
                    'Theatre enthusiast ',
                    1000,
                ]}
                />
                </p>
                <p>
                    A third year student persuing computer science and enrolled in imtech at IIITB 
                </p>
                </div>
                <h3 className="h3">SKILLS</h3>
                <div className="skillContainer">
                
                    <div className="skills">
                        <img src={htmlImage}></img>
                    </div>
                    <div className="skills">
                        <img src={cssImage}></img>
                    </div>
                    <div className="skills">
                        <img src={pyImage}></img>
                    </div>
                    <div className="skills">
                        <img src={jsImage}></img>
                    </div>
                    <div className="skills">
                        <img src={reactImage}></img>
                    </div>
                    <div className="skills">
                        <img src={nodeImage}></img>
                    </div>
                    <div className="skills">
                        <img src={expressImage}></img>
                    </div>
                    <div className="skills">
                        <img src={mongodbImage} id="mongo"></img>
                    </div>
                    
            </div>
            </div>
           
        </>
    )
}

export default Home

