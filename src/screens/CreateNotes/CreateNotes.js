import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'


import Form from 'react-bootstrap/Form';
import axios from 'axios';



const CreateNotes = () => {

//on submit
const [event,setEvent]=useState({
    name:"",
    date:"",
    month:"",
    email:"",
    message:"",
})

const handleChange=(e)=>{
    
   const{name,value} = e.target;
   setEvent((oldEvent)=> {
    return{
        ...oldEvent,
        [name]:value,
    }
   })
    
} 
// console.log(event)
const handleSubmit = (e) => {

    
    e.preventDefault();

    const newEvent={
        name:event.name,
        date:event.date,
        month:event.month,
        email:event.email,
        message:event.message,

    }
    axios.post("https://mern-backend-95c2.onrender.com/api/create-schedule",newEvent)
    

    setEvent({
        name:"",
        email:"",
        date:"",
        month:"",
        message:""
    
    })
}







    return (
        <MainScreen title="Create New Schedule">
        <Form onSubmit={handleSubmit}>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label >Name</Form.Label>
            <Form.Control name="name" value={event.name} onChange={handleChange} type="String" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label  >Date</Form.Label>
            <Form.Control name="date" value={event.date} onChange={handleChange} type="String" placeholder="Date" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Month</Form.Label>
            <Form.Control  name="month" value={event.month} onChange={handleChange} type="String" placeholder="Month" />
          </Form.Group>
          
          <Form.Group className="mb-3" >
            <Form.Label >Email address</Form.Label>
            <Form.Control name="email" value={event.email} onChange={handleChange} type="string" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control  name="message" value={event.message} onChange={handleChange} type="string" placeholder="Enter Message" />
            </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </MainScreen>
      );
}

export default CreateNotes;
