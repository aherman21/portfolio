import axios from 'axios';

// This interface Should be moved to types.ts
interface FeedbackData {
  id: number;
  message: string;
  name: string;
  date: Date;
  isPublic: boolean
}

const url = '/api/feedbacks';

// when testing locally use this url: const url = 'http://localhost:3001/feedbacks';
// then navigate to db folder and type json-server --watch db.json --port 3001

// when making a build use this url: const url = '/api/feedbacks';


// Function to get all feedbacks
export const getAllFeedbacks = async (): Promise<FeedbackData[]> => {
  const response = await axios.get<FeedbackData[]>(url);
  return response.data;
};

// Function to add a new feedback
export const addFeedback = async (newFeedback: FeedbackData): Promise<FeedbackData> => {
  const response = await axios.post<FeedbackData>(url, newFeedback);
  return response.data;
};

// Function to delete a feedback
export const deleteFeedback = async (id: number): Promise<void> => {
  await axios.delete(`${url}/${id}`);
};
