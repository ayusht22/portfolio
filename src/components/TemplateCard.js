import React from 'react'
import {Card} from 'react-bootstrap'
function TemplateCard({image,heading,text}) {
    return (
        
                <Card
                style={{ margin:"auto",width: '18rem' ,backgroundColor:"rgb(31 32 34)",color:"white",height:"28rem"}}
                id="card"
                >
                    <Card.Header>{heading}</Card.Header>
                    <div className="image" style={{height:"280px"}}>
                    <Card.Img src={image} id="card-img" ></Card.Img>
                    </div>
                    <Card.Body>
                    <Card.Text > 
                        {text}
                    </Card.Text>
                    </Card.Body>
                </Card>
          
    )
}

export default TemplateCard
