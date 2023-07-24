import React from "react";
import "./Tile.css";
import Piece from "../Piece/Piece";

const Tile = ({ tile, isTileDark, selectMovement }) => {
    const tileClass = isTileDark ? "dark-tile" : "light-tile";

    return (
        <button
            onClick={selectMovement}
            className={`tile ${tileClass}`}
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
