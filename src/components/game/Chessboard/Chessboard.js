import React, { useState } from "react";
import Tile from "../../common/Tile/Tile";
import "./Chessboard.css";
import * as ChessPieces from "../../../utils/ChessPieces";

const Chessboard = () => {
    const [availableMoves, setAvailableMoves] = useState([]);
    const [currentMovingPiece, setCurrentMovingPiece] = useState(null);
    const showMovements = (tile) => {
        if (!tile.piece) {
            return;
        }
        setCurrentMovingPiece({ row: tile.row, col: tile.col });
        setAvailableMoves(
            tile.piece.data.getMoves(tile.row, tile.col, tile.piece.isDark)
        );
    };
    const boardTiles = [];
    for (let row = 0; row < 8; row++) {
        boardTiles.push([]);
        for (let col = 0; col < 8; col++) {
            const tile = { row, col };
            switch (row) {
                case 0:
                case 7:
                    tile.empty = false;
                    tile.piece = {
                        data: ChessPieces.BACK_LANE[col],
                        isDark: row === 0,
                    };
                    break;
                case 1:
                case 6:
                    tile.empty = false;
                    tile.piece = { data: ChessPieces.PAWN, isDark: row === 1 };
                    break;
                default:
                    tile.empty = true;
                    tile.piece = null;
            }
            boardTiles[row].push(tile);
        }
    }

    return (
        <div className="chessboard">
            {boardTiles.map((row) =>
                row.map((tile) => (
                    <Tile
                        key={`${tile.row}-${tile.col}`}
                        tile={tile}
                        isTileDark={(tile.row + tile.col) % 2 === 1}
                        showMovements={showMovements}
                        availableMoves={availableMoves}
                        currentMovingPiece={currentMovingPiece}
                    />
                ))
            )}
        </div>
    );
};

export default Chessboard;
