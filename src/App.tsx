import React, { useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import FeedBack from "./components/FeedBack"
import Header from "./components/Header"
import './styles/index.css'
import Wrapper from "./components/Wrapper"
import FeedBackForm from "./components/FeedBackForm"
import InfoTechAndInterests from "./components/InfoTechAndInterests"
import AppShowcase from "./components/AppDisplay"
import TicTacToeGame from "./components/TicTacToe"


const App: React.FC = () => {

  const [newName, setNewName] = useState("")
  const [newMessage, setNewMessage] = useState("")
  const [newCompanyName, setNewCompanyName] = useState("")

  //handlers for the input changes
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value)
  }

  const handleCompanyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCompanyName(event.target.value)
  }

  //handler for the form submit
  const addLog = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //logging the input
    console.log("Name: ", newName)
    console.log("Company Name: ", newCompanyName)
    console.log("Message: ", newMessage)
    //clearing the input afrer submit
    setNewName("")
    setNewCompanyName("")
    setNewMessage("")
  }

  return (
    <Wrapper>
      <Header />
      <About />
      <Contact />
      <TicTacToeGame />
      <InfoTechAndInterests />
      <Contact />
      <AppShowcase />
      <FeedBack />
      <FeedBackForm
        addLog={addLog}
        newName={newName}
        newMessage={newMessage}
        newCompanyName={newCompanyName}
        handleNameChange={handleNameChange}
        handleMessageChange={handleMessageChange}
        handleCompanyNameChange={handleCompanyNameChange}
      />
      <Contact />
    </Wrapper>
  )
}

export default App
