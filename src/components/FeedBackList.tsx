import React from 'react';
import Feedback from './FeedBack.tsx';
import '../styles/index.css';

interface FeedbackData {
    id: number;
    message: string;
    name: string;
    date: Date;
    isPublic: boolean
}

interface FeedbackListProps {
  feedbacks: FeedbackData[]; // Array of feedbacks from parent
  onDelete: (id: number) => void; // Delete handler function from parent
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks, onDelete }) => {
  // create a copy of the feedbacks array and sort it by date
  feedbacks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className='container'>
      <div className='infoContainer'>
      <p># feedbacks are posted to and retrieved from a MongoDB</p>
      </div>
      {feedbacks.map((feedback) => (
        <Feedback
          key={feedback.id}
          message={feedback.message}
          name={feedback.name}
          date={feedback.date}
          isPublic={feedback.isPublic}
          onDelete={() => onDelete(feedback.id)}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
