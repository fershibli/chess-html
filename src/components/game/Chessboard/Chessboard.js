import React from "react";
import Tile from "../../common/Tile/Tile";
import "./Chessboard.css";

const Chessboard = () => {
    const boardCells = [];
    for (let row = 0; row < 8; row++) {
        boardCells.push([]);
        for (let col = 0; col < 8; col++) {
            boardCells[row].push({
                empty: true,
                piece: null,
                row,
                col,
            });
        }
    }

    return (
        <div className="chessboard">
            {boardCells.map((row) =>
                row.map((cell) => (
                    <Tile
                        key={`${cell.row}-${cell.col}`}
                        isDark={(cell.row + cell.col) % 2 === 1}
                        row={cell.row}
                        col={cell.col}
                    />
                ))
            )}
        </div>
    );
};

export default Chessboard;
