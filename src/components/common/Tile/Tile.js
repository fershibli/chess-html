import React from "react"
import "./Tile.css"

const Tile = ({ row, col, isDark }) => {
  const tileClass = isDark ? "dark-tile" : "light-tile"

  return (
    <button className={`tile ${tileClass}`}>
      <span>{`${row}, ${col}`}</span>
    </button>
  )
}

export default Tile
