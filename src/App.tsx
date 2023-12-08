import React, { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import FeedBackList from "./components/FeedBackList"
import Header from "./components/Header"
import './styles/index.css'
import Wrapper from "./components/Wrapper"
import FeedBackForm from "./components/FeedBackForm"
import InfoTechAndInterests from "./components/InfoTechAndInterests"
import AppShowcase from "./components/AppDisplay"
import TicTacToeGame from "./components/TicTacToe"
import { addFeedback, getAllFeedbacks, deleteFeedback } from "./services/feedbackService"

interface FeedbackData {
  id: number;
  name: string;
  message: string;
  date: Date;
  isPublic: boolean
}


const App: React.FC = () => {

  const [newName, setNewName] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const [feedbacks, setFeedbacks] = useState<FeedbackData[]>([])
  const [checkPublic, setCheckPublic] = useState(true)


  useEffect(() => {
    
    const fetchFeedbacks = async () => {
      const initialFeedbacks = await getAllFeedbacks();
      setFeedbacks(initialFeedbacks);
    }
    fetchFeedbacks();
  }, [])
  
  //handlers for the input changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value)
  }

  const handlePublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckPublic(event.target.checked)
  }

  const handleDelete = async (feedbackId: number) => {
    try {
      await deleteFeedback(feedbackId);
      setFeedbacks(currentFeedbacks => currentFeedbacks.filter(feedback => feedback.id !== feedbackId))
    } catch (error) {
      console.error('Error deleting feedback', error)
    }
  }

  //handler for the form submit
  const addLog = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newFeedback = {
      id: new Date().getTime(),
      name: newName,
      message: newMessage,
      date: new Date(),
      isPublic: checkPublic,
    }
    try {

    const addedFeedback = await addFeedback(newFeedback);
    setFeedbacks(currentFeedbacks => [...currentFeedbacks, addedFeedback])
    } catch (error) {
      console.error('Error adding feedback', error)
    }
    //logging the input
    console.log("Name: ", newName)
    console.log("Message: ", newMessage)
    //clearing the input afrer submit
    setNewName("")
    setNewMessage("")
  }

  return (
    <Wrapper>
      <Header />
      <About />
      <Contact />
      <InfoTechAndInterests />
      <Contact />
      <TicTacToeGame />
      <AppShowcase />
      <FeedBackForm
        addLog={addLog}
        newName={newName}
        newMessage={newMessage}
        checkPublic={checkPublic}
        handleNameChange={handleNameChange}
        handleMessageChange={handleMessageChange}
        handlePublicChange={handlePublicChange}

      />
      <FeedBackList 
        feedbacks={feedbacks}
        onDelete={handleDelete}
       />
      <Contact />
    </Wrapper>
  )
}

export default App
