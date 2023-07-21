import React from "react";
import "./Piece.css";

const Piece = ({ isPieceDark, render, col, row }) => {
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
            {render && (
                <div
                    className="piece"
                    style={{ "--color": isPieceDark ? "slateblue" : "salmon" }}
                >
                    {render}
                </div>
            )}
        </div>
    );
};

export default Piece;
