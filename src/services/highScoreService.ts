import axios from "axios";
import { HighScore } from "../types/types";

// getting scores from db
const url = 'http://localhost:3001/highScores'

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

export const updateHighScores = async (newScore: HighScore) => {
    try {
        //fetches the current highscores to determine if we need to add the new score
        const currentScoresResponse = await axios.get(url)
        let currentScores = currentScoresResponse.data

        // add the new score
        currentScores.push(newScore)

        //sort the scores
        currentScores.sort((a: HighScore, b: HighScore) => b.score - a.score)

        // Limit to top 30 scores
        if (currentScores.length > 30) {
            currentScores = currentScores.slice(0, 30)
        }

        // Post each score individually
        for (const score of currentScores) {
            await axios.post(url, score)
        }
    } catch (error) {
        console.error('Error updating high scores', error)
    }
}