import { createSlice } from "@reduxjs/toolkit";
import { defaultState, nextRotation, canMoveTo } from "../utils";

export const gameSlice = createSlice({
  name: "game",
  initialState: defaultState(),
  reducers: {
    pause: () => {},
    resume: () => {},
    moveLeft: () => {},
    moveRight: () => {},
    moveDown: () => {},
    rotate: (state) => {
      const { shape, grid, x, y, rotation } = state;
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        state.rotation = newRotation;
      }
      return state;
    },
    gameOver: () => {},
    restart: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  pause,
  resume,
  moveLeft,
  moveRight,
  moveDown,
  rotate,
  gameOver,
  restart,
} = gameSlice.actions;

export default gameSlice.reducer;
