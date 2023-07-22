import React from "react";
import "./Piece.css";

const Piece = ({ isPieceDark, pieceRender, pieceScale, col, row }) => {
    return (
        <div style={{ position: "relative" }}>
            <span
                style={{
                    position: "absolute",
                    color: "gray",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                {row + 1}, {col + 1}
            </span>
            {pieceRender && (
                <div
                    className="piece"
                    style={{
                        "--color1": isPieceDark ? "106,90,205" : "250,128,114",
                        "--color2": isPieceDark ? "0,0,128" : "255,99,71",
                        "--scale": pieceScale,
                    }}
                >
                    {pieceRender}
                </div>
            )}
        </div>
    );
};

export default Piece;
