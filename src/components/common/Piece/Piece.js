import React from "react";
import "./Piece.css";

const Piece = ({ char }) => {
    if (char) {
        return <div className="piece">{char}</div>;
    } else {
        return <div></div>;
    }
};

export default Piece;
