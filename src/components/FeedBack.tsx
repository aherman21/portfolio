import React, { useState } from 'react';
import '../styles/InfoTechAndInterests.css'; // Import your CSS file

interface FeedbackProps {
        message: string;
        name: string;
        date: Date

        onDelete: () => void;

    }

const FeedBack: React.FC<FeedbackProps> = ({ message, name, date, onDelete }) => {
    const formattedDate = new Date(date).toLocaleDateString('fi-FI')
    const [password, setPassword] = useState('');
    const [isPasswordPromptVisible, setPasswordPromptVisible] = useState(false);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const confirmDeletion = () => {
        if (password === '123') {
            onDelete();
            setPassword('');
            setPasswordPromptVisible(false);
        } else {
            alert('Incorrect password');
        }
    }
  return (
    <div className="codeContainer">
        <p className='appDescription'>{message}</p>
        <p className='variable'>{name}</p>
        <p>{formattedDate}</p>
        <button className='button' onClick={() => setPasswordPromptVisible(true)}>Delete</button>

        {isPasswordPromptVisible && (
            <div className='passwordPrompt'>
                <input 
                    type='password' 
                    value={password} 
                    onChange={handlePasswordChange}
                    placeholder='Enter password to delete'
                 />
                <button className='button' onClick={confirmDeletion}>Confirm</button>
            </div>
    )}
    </div>
    );
};

export default FeedBack;
