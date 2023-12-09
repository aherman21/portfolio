import axios from 'axios';

interface FeedbackData {
  id: number;
  message: string;
  name: string;
  date: Date;
  isPublic: boolean
}

const API_URL = 'http://localhost:3002/api/feedbacks';

// Function to get all feedbacks
export const getAllFeedbacks = async (): Promise<FeedbackData[]> => {
  const response = await axios.get<FeedbackData[]>(API_URL);
  return response.data;
};

// Function to add a new feedback
export const addFeedback = async (newFeedback: FeedbackData): Promise<FeedbackData> => {
  const response = await axios.post<FeedbackData>(API_URL, newFeedback);
  return response.data;
};

// Function to delete a feedback
export const deleteFeedback = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
