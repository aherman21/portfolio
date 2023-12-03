import React from "react"
import '../styles/FeedBackForm.css'

interface FeedBackFormProps {
    addLog: (event: React.FormEvent<HTMLFormElement>) => void
    newName: string
    newMessage: string
    newCompanyName: string
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleMessageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleCompanyNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
                />
            </div>
            <button className="formButton" type="submit">Submit</button>
        </form>
    )
}

export default FeedBackForm