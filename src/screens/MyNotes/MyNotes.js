

import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import { Link } from 'react-router-dom';

import axios from 'axios';

// http://localhost:5000/api/list  href={axios.delete(`/api/delete-event/${note._id}`)}

function MyNotes() {

const [notes, setNotes] = useState([])


const fetchNotes = async() => {
  const { data }= await axios.get("https://mernapp-backend.onrender.com/api/list")
   
  setNotes(data)
};

const deleteEvent = async (id) => {
  
  try{
   await  axios.delete('https://mernapp-backend.onrender.com/api/delete-event/'+id)
  }catch(err ){
    console.log(err)
  }
}

const sendMail = async(id) =>
{
  try{
    console.log("id ==> ", id)
    await axios.post('https://mernapp-backend.onrender.com/api/send/'+id)
  }catch(err){
    console.log(err)
  }
}








useEffect(() => {
 fetchNotes();
}, [])

  return (
    <MainScreen title="welcome to the dashboard">
      <Link to="/createnote">
      <Button style={{marginLeft:10,marginBottom:6}} size="lg">
        Create New Schedule
      </Button>
      </Link>
      {
      notes.map(note=>(
<Card style={{margin:"10"}}>
        <Card.Header style={{display:"flex"}}>
          <span
          style={{
            color:"black",
            textDecoration:"none",
            flex:"1",
            cursor:"pointer",
            alignSelf:"center",
            fontSize:18,
          }}
          
          >{note.name}</span>
       
        <div>
          
          <button variant="danger" className="mx-2" onClick={() => deleteEvent(note._id)}>Delete</button>
          <button onClick={() => sendMail(note._id)}>send</button>
        </div>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
          <p>
         Date : {note.date}
          </p>
          <p>
        Month: {note.month}
          </p>
          <p>
        ID: {note._id}
          </p>
          <footer className='footer'>
          Email: {note.email}
          </footer>
          </blockquote>
        </Card.Body>
      </Card>
      ))}
      
      
      
    </MainScreen>
    
  )
}

export default MyNotes
