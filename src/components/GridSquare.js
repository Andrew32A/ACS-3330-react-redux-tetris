import React from "react";

export default function GridSquare({ color }) {
  const classes = `grid-square color-${color}`;
  return <div className={classes} />;
}
