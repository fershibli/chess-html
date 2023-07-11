import React from "react"
import Tile from "../../common/Tile/Tile"
import "./Chessboard.css"

const Chessboard = () => {
  const rows = Array.from({ length: 8 }, (_, row) => row)
  const cols = Array.from({ length: 8 }, (_, col) => col)

  return (
    <div className="chessboard">
      {rows.map((row) =>
        cols.map((col) => (
          <Tile
            key={`${row}-${col}`}
            isDark={(row + col) % 2 === 1}
            row={row}
            col={col}
          />
        ))
      )}
    </div>
  )
}

export default Chessboard
