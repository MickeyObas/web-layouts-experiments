import { useState } from 'react';
import Board from './Board.js';

export default function Game(){
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const winner = checkWinner(squares);
    const isDraw = !checkWinner(squares) && !squares.includes(null);

    let status;
    if (winner){
        status = 'Winner: ' + winner;
    } else if(isDraw){
        status = "It's a draw!!!";
    } else {
        status = "Next player: " + (isXTurn ? 'X' : 'O');
    }

    function resetBoxes(){
        setSquares(Array(9).fill(null));
        setIsXTurn(true);
    }

    return (
        <>
            <div id='turnDisplay'>
                <p>{status}</p>
            </div>
            <div style={{'display':'flex', 'justifyContent': 'center', 'alignItems':'center', 'flexDirection':'column'}}>
                <Board 
                squares={squares}
                setSquares={setSquares}
                isXTurn={isXTurn}
                setIsXTurn={setIsXTurn}    
                />
                <div id='resetBar'>
                <p
                style={{'textAlign':'center', 'cursor': 'pointer'}}
                onClick={resetBoxes}
                >Reset Game</p>
                </div>
            </div>
        </>
    )
}

export function checkWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for(let i=0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null;
}