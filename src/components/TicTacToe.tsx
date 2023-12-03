import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const TicTacToeGame = () => {
    const [gameStage, setGameStage] = useState('preGame');
    const [nickName, setNickName] = useState('Your Nickname');
    const [consecutiveWins, setConsecutiveWins] = useState(0);
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isPlayerNext, setIsPlayerNext] = useState(true);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        // Check if it's AI's turn and the game is still ongoing
        if (!isPlayerNext && !winner) {
            makeAIMove();
        }
    }, [isPlayerNext, winner]);

    const makeAIMove = () => {
        let availablePositions = board.map((item, idx) => item === null ? idx : null).filter(item => item !== null);
        
        if (availablePositions.length === 0) return;
        
        let randomMove = availablePositions[Math.floor(Math.random() * availablePositions.length)];
        makeMove(randomMove, 'O');
    };

    const handleClick = (index: number) => {
        if (winner || board[index]) return;
        makeMove(index, 'X');
    };

    const resetBoard = () => {
        setBoard(initialBoard);
        setIsPlayerNext(true);
        setWinner(null);
    };


    const makeMove = (index: number | null, player: string) => {
        if (index !== null) {
            const updatedBoard = [...board];
            updatedBoard[index] = player;
            setBoard(updatedBoard);
            checkWinner(updatedBoard);

            // Switch turn
            setIsPlayerNext(player === 'O');
        }
    };

    const checkWinner = (board: any[]) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (let line of lines) {
            const [a, b, c] = line;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                break;
            }
        }

        if (winner) {
            if (winner === 'X') { //player wins
                setConsecutiveWins(consecutiveWins + 1);
                setTimeout(resetBoard, 2000) //reset board after 2 seconds
            } else if (winner === 'O') { //AI wins
                setTimeout(() => setGameStage('postGame'), 2000) //go to postgame after 2 seconds
            }
        } else if (!board.includes(null)) { //draw
            setTimeout(resetBoard, 2000) //reset board after 2 seconds
        }
    };


    const renderCell = (_index: any) => {
        return (
            <button className='cell' onClick={() => handleClick(_index)}>
                {board[_index]}
            </button>
        );
    };

    const startGame = () => {
        setGameStage('nickName');
    };

    const handleNickNameSubmit = () => {
        setGameStage('inGame');
    }

    const renderPreGame = () => (
        <div className='promptBox'>
            <p>Do you want to play a game?</p>
            <button onClick={startGame}>Yes</button>
            <button onClick={startGame}>Of course</button>
        </div>
    );
    
    
    
    const renderNickNameInput = () => (
        <div className="nicknameInput">
            <h1>Enter your playername:</h1>
            <input
                 type="text" 
                 value={nickName} 
                 onChange={(e) => setNickName(e.target.value)} 
            />
            <button onClick={handleNickNameSubmit}>Start Game</button>
        </div>
    );
    
    

    const renderGame = () => (
        <div className="ticTacToeGame">
            <div className="board">
                {Array(9).fill(null).map((_, index) => renderCell(index))}
            </div>
        </div>
    );

    const renderPostGame = () => (
        <div className="postGame">
            <p>Game Over! Your consecutive wins: {consecutiveWins}</p>
            {/*highscore display coming later */}
        </div>
    );

    return (
        <div>
            {gameStage === 'preGame' && renderPreGame()}
            {gameStage === 'nickName' && renderNickNameInput()}
            {gameStage === 'inGame' && renderGame()}
            {gameStage === 'postGame' && renderPostGame()}
        </div>
    )
};

export default TicTacToeGame;
