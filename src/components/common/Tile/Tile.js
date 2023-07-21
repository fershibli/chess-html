import React from "react";
import "./Tile.css";
import Piece from "../Piece/Piece";

const Tile = ({ tile, isDark }) => {
    const tileClass = isDark ? "dark-tile" : "light-tile";

    return (
        <button className={`tile ${tileClass}`}>
            <Piece char={tile.piece?.dark} col={tile.col} row={tile.row} />
        </button>
    );
};

export default Tile;
