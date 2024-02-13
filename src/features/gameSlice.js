import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {},
  reducers: {
    pause: () => {},
    resume: () => {},
    moveLeft: () => {},
    moveRight: () => {},
    moveDown: () => {},
    rotate: () => {},
    gameover: () => {},
    restart: () => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  moveLeft,
  moveRight,
  moveDown,
  rotate,
  pause,
  resume,
  gameOver,
  restart,
} = gameSlice.actions;

export default gameSlice.reducer;
