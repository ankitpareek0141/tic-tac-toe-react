import { useState } from 'react';

const initialBoard = [  
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialBoard);

    function squareHandleClick(rowIndex, colIndex) {
        

        setGameBoard((prevGameBaord) => {
            const updatedGameBaord = [...prevGameBaord.map((row) => [...row] )];
            updatedGameBaord[rowIndex][colIndex] = 'X';
            return updatedGameBaord;
        });
    }

    return (
        <div id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((playerSymbol, colIndex) => (
                        <button 
                            key={colIndex} 
                            onClick={() => squareHandleClick(rowIndex, colIndex)}>
                                {playerSymbol}
                        </button>
                    ))}01
                </div>
            ))}
        </div>
    );
}
