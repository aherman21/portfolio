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
  return (
    <div className='container'>
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
