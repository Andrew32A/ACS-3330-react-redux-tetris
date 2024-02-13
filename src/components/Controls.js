import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../features/gameSlice";

export default function Controls(props) {
  const dispatch = useDispatch();
  const { isRunning } = useSelector((state) => state);

  return (
    <div className="controls">
      {/* left */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning}
        className="control-button"
        onClick={(e) => {
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
}
