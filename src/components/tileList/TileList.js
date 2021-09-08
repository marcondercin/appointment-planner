import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({tiles}) => {
  let newArray = tiles.map((tile, index) => {
    return (
      <Tile key={index} tiles={tile}/>
    );
  });

  return (
    <div>
      {newArray}
    </div>
  )
};
