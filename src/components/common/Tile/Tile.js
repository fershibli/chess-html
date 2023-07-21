import React from "react";
import "./Tile.css";
import Piece from "../Piece/Piece";

const Tile = ({ tile, isTileDark }) => {
    const tileClass = isTileDark ? "dark-tile" : "light-tile";

    return (
        <button className={`tile ${tileClass}`}>
            <Piece
                render={tile.piece?.dark}
                isPieceDark={true}
                col={tile.col}
                row={tile.row}
            />
        </button>
    );
};

export default Tile;
