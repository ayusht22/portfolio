import React from 'react'
import Card from './TemplateCard'
import image1 from './images/chat.PNG'
import image2 from './images/pin.PNG'

function Projects() {
    return (
        <>
            <h1 style={{color:"white",fontFamily:"monospace",fontWeight:"bolder"}}>PROJECTS</h1>
            <div className="container d-flex justify-content-center mt-5">
               <div className="row " >
                    <div className="col" style={{padding:"10px",marginRight:"50px"}} >
                    <Card heading={"CHATROOM APP"} image={image1} text={"built using socketio nodejs and react"}/>
                    </div>
                    <div className="col" style={{padding:"10px",marginRight:"50px"}}>
                    <Card heading={"rate a place on map"} image={image2} text={"built using MERN stack. User can pin a new location and rate or can rate already pinned locations "}/>
                    </div>
                    <div className="col" style={{padding:"10px",marginRight:"50px"}}>
                    <Card heading={"rate a place on map"} image={image2} text={"built using MERN stack. User can pin a new location and rate or can rate already pinned locations "}/>
                    </div>
               </div>
            </div>
        </>
    )
}

export default Projects
