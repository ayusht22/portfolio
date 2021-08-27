import React from 'react'
import emailjs from 'emailjs-com'
import {Form,Button} from 'react-bootstrap'
import {Facebook,GitHub,LinkedIn} from '@material-ui/icons';
import Link from '@material-ui/core/Link';
function Contact() {
    function sendEmail(e)
    {  console.log(process.env.REACT_APP_SERVICEID)
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICEID,process.env.REACT_APP_TEMPLATE_ID,e.target,process.env.REACT_APP_USER_ID)
        .then((result)=>{
            console.log(result);
        },(err)=>{
            console.log(err);
        });
        alert("message sent !");
        e.target.reset();

    }
    return (
        <>
        <div className="contact-form">
            <Form onSubmit={sendEmail}>
                <h2 style={{float:"left"}}>Write to me</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Your name" name="name"style={{marginTop:"40px",background:"#212529",borderTop:"none",borderRight:"none",borderLeft:"none"}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="name@example.com" name="email"style={{marginTop:"40px",background:"#212529",borderTop:"none",borderRight:"none",borderLeft:"none"}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="subject" name="subject" style={{marginTop:"40px",background:"#212529",borderTop:"none",borderRight:"none",borderLeft:"none"}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             
                    <Form.Control as="textarea" placeholder="message"rows={5} name="message" style={{marginTop:"40px",background:"#212529",borderTop:"none",borderRight:"none",borderLeft:"none"}}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
         <div className="socials">
         <Link href="https://www.facebook.com/ayush.tiwari.1460"><Facebook style={{fontSize:"55px",color:"rgb(17, 82, 147)"}}/></Link>
         <Link href="https://www.linkedin.com/in/ayush-tiwari-5373831b3/"><LinkedIn style={{fontSize:"60px",color:"rgb(17, 82, 147)"}}/></Link>
         <Link href="https://github.com/ayusht22" style={{background:"none"}}><GitHub style={{fontSize:"50px",color:"white"}}/></Link>
     </div>
     </>
    )
}

export default Contact
