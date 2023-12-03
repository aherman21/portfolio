import React, { useState } from 'react';
import Feedback from './FeedBack.tsx';
import '../styles/InfoTechAndInterests.css';

interface FeedbackData {
    id: number;
    message: string;
    name: string;
    date: Date;
}

interface FeedbackListProps {
  feedbacks: FeedbackData[]; // Array of feedbacks from parent
  onDelete: (id: number) => void; // Delete handler function from parent
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks, onDelete }) => {
  return (
    <div>
      {feedbacks.map((feedback) => (
        <Feedback
          key={feedback.id}
          message={feedback.message}
          name={feedback.name}
          date={feedback.date}
          onDelete={() => onDelete(feedback.id)}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
