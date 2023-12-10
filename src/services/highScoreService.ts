import axios from "axios";
import { HighScore } from "../types/types";

// getting scores from db
const url = 'http://localhost:3001/highScores'
//when testing locally use this url: const url = 'http://localhost:3001/highScores'
//when making a build use this url: const url = '/api/highScores'

export const fetchHighScores = async () => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
    console.error('Error fetching high scores', error)
    return []
    }
}

//updating scores
export const addNewHighScore = async (newScore: HighScore) => {
    try {
        // POST the new high score object directly
        await axios.post(url, newScore);
    } catch (error) {
        console.error('Error adding new high score:', error);
    }
};


