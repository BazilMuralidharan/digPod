import { createSlice } from "@reduxjs/toolkit";

const init = [];

const stateRedux = createSlice({
  name: "stateReducer",
  initialState: init,
  reducers: {
    pushData: (state, action) => {
      state.push(action.payload);
    },
    deleteData: (state, action) => {
      let finder = state.findIndex((el) => el.name === action.payload.name);
      state.splice(finder, 1);
    }
  }
});

export default stateRedux.reducer;
export const { pushData, deleteData } = stateRedux.actions;
