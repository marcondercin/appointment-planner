import React from "react";

export const Tile = ({tiles}) => {
  let tileList = Object.values(tiles).map((value, index) => {
    if (index === 0) {
      return (
        <p key={index} className="tile-title">
          {value}
        </p>
      )
    } else {
      return (
        <p key={index} className="tile">
          {value}
        </p>
      )
    }
  })
  return (
    <div className="tile-container">
      {tileList}
    </div>
  );
};
