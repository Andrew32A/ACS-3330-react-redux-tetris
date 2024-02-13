import { createSlice } from "@reduxjs/toolkit";
import {
  defaultState,
  nextRotation,
  canMoveTo,
  addBlockToGrid,
  checkRows,
  randomShape,
} from "../utils";

export const gameSlice = createSlice({
  name: "game",
  initialState: defaultState(),
  reducers: {
    pause: (state) => {
      state.isRunning = false;
      return state;
    },
    resume: (state) => {
      state.isRunning = true;
      return state;
    },
    moveLeft: (state) => {
      const { shape, grid, x, y, rotation } = state;
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        state.x = x - 1;
      }
      return state;
    },
    moveRight: (state) => {
      const { shape, grid, x, y, rotation } = state;
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        state.x = x + 1;
      }
      return state;
    },
    moveDown: (state) => {
      const { x, y, shape, grid, rotation, nextShape } = state;
      // Get the next potential Y position
      const maybeY = y + 1;
      // Check if the current block can move here
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        // If so move the block
        state.y = maybeY;
        // In this case we're done return state!
        return state;
      }
      // If not place the block
      const newGrid = addBlockToGrid(shape, grid, x, y, rotation);

      // reset some things to start a new shape/block
      state.x = 3;
      state.y = -4;
      state.rotation = 0;
      state.grid = newGrid;
      state.shape = nextShape;
      state.nextShape = randomShape();

      // Check that the new block can be added
      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        // If not Game Over
        console.log("Game Should be over...");
        state.shape = 0;
        state.gameOver = true;
        return state;
      }

      // Update the score based on if rows were completed or not
      state.score += checkRows(newGrid);
      return state;
    },
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
