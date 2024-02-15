import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../features/gameSlice";

export default function Controls(props) {
  const dispatch = useDispatch();
  const { isRunning, speed, gameOver } = useSelector((state) => state);

  // Set up the game timer
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);

  // Handle game updates to move blocks down the screen
  const update = (time) => {
    requestRef.current = requestAnimationFrame(update);
    if (!isRunning) {
      return;
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > speed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isRunning || gameOver) return;

      switch (e.key) {
        case "ArrowLeft":
        case "a":
          dispatch(moveLeft());
          break;
        case "ArrowRight":
        case "d":
          dispatch(moveRight());
          break;
        case "ArrowDown":
        case "s":
          dispatch(moveDown());
          break;
        case "ArrowUp":
        case "w":
          dispatch(rotate());
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    requestRef.current = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isRunning, gameOver, dispatch, speed]);

  return (
    <div className="controls">
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
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
