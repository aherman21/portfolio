import React from "react"
import '../styles/FeedBackForm.css'

interface FeedBackFormProps {
    addLog: (event: React.FormEvent<HTMLFormElement>) => void
    newName: string
    newMessage: string
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FeedBackForm: React.FC<FeedBackFormProps> = (props) => {
    return (
        <form 
            className="formWrapper"
            onSubmit={props.addLog}>
            <h2 className="formTitle">Feedback</h2>
            <div className="fieldGroup">
                <label 
                    className="formLabel"
                    htmlFor="message">Be honest, constructive feedback supports my professional growth</label>
                <input
                    className="formField"
                    id="message"
                    value={props.newMessage}
                    onChange={props.handleMessageChange}
                    placeholder="Type your feedback here"
                />
                <input
                    className="formField"
                    id="name"
                    value={props.newName}
                    onChange={props.handleNameChange}
                    placeholder="This is optional but you can type your name here"
                />
            </div>
            <button className="formButton" type="submit">Submit</button>
        </form>
    )
}

export default FeedBackForm