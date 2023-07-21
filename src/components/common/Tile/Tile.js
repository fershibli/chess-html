import React from "react";
import "./Tile.css";
import Piece from "../Piece/Piece";

const Tile = ({ tile, isDark }) => {
    const tileClass = isDark ? "dark-tile" : "light-tile";

    return (
        <button className={`tile ${tileClass}`}>
            <Piece char={`${tile.row}, ${tile.col}`} />
        </button>
    );
};

export default Tile;
