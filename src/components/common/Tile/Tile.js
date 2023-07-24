import React, { useEffect, useState } from "react";
import "./Tile.css";
import Piece from "../Piece/Piece";

const Tile = ({ tile, isTileDark, selectMovement, availableMoves }) => {
    const [isAvailableMove, setIsAvailableMove] = useState(false);
    const tileClass = isTileDark ? "dark-tile" : "light-tile";

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

    return (
        <button
            onClick={() => selectMovement(tile)}
            className={`tile ${isAvailableMove ? "available-tile" : tileClass}`}
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
