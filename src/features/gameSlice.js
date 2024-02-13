import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "../utils";

export const gameSlice = createSlice({
  name: "game",
  initialState: defaultState(),
  reducers: {
    pause: () => {},
    resume: () => {},
    moveLeft: () => {},
    moveRight: () => {},
    moveDown: () => {},
    rotate: () => {},
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
