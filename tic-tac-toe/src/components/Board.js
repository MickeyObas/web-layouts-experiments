import Box from './Box.js';
import { checkWinner } from './Game.js';

export default function Board({
    squares,
    setSquares,
    isXTurn,
    setIsXTurn
}){

    function handleClick(pos){
        const nextSquares = squares.slice();
        if(checkWinner(squares) || squares[pos]){
            return;
        }
        nextSquares[pos] = isXTurn ? 'X' : 'O';
        setSquares(nextSquares);
        checkWinner(squares);
        setIsXTurn(!isXTurn);
      }

    const renderBox = (index) => {
        return <Box value={squares[index]} onClick={() => handleClick(index)} />
    }

    return (
        <div id='gameBoard'>
            {renderBox(0)}
            {renderBox(1)}
            {renderBox(2)}
            {renderBox(3)}
            {renderBox(4)}
            {renderBox(5)}
            {renderBox(6)}
            {renderBox(7)}
            {renderBox(8)}
        </div>
    )
}

