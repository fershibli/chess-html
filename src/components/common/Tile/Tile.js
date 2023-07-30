import React, { useEffect, useState } from "react";
import "./Tile.css";
import Piece from "../Piece/Piece";

const Tile = ({ tile, isTileDark, showMovements, availableMoves }) => {
    const [isAvailableMove, setIsAvailableMove] = useState(false);
    const [isMovingPiece, setIsMovingPiece] = useState(false);
    const tileClass = isTileDark ? "dark-tile" : "light-tile";

    const handleTileClick = () => {
        setIsMovingPiece(true);
        showMovements(tile);
    };

    useEffect(() => {
        setIsAvailableMove(false);
        if (
            tile.piece === null &&
            availableMoves.filter(
                (move) =>
                    move.row === tile.row &&
                    move.col === tile.col &&
                    !move.isAttackMove
            ).length > 0
        ) {
            setIsAvailableMove(true);
        }
    }, [availableMoves, tile]);

    const getClassName = () => {
        let allClasses = "tile ";
        if (isAvailableMove) {
            allClasses += "available-tile";
        } else if (isMovingPiece) {
            allClasses += "moving-tile";
        } else {
            allClasses += tileClass;
        }
        return allClasses;
    };

    return (
        <button
            onClick={handleTileClick}
            className={getClassName()}
            style={{ "--delay": `${(tile.row + tile.col) * 100}ms` }}
        >
            <Piece
                isPieceDark={tile.piece?.isDark}
                pieceRender={tile.piece?.data.dark}
                pieceScale={tile.piece?.data.size}
                col={tile.col}
                row={tile.row}
            />
        </button>
    );
};

export default Tile;
