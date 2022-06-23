import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  weather: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { setData } = weatherSlice.actions;

export const selectData = (state) => state.weather.weather;

export default weatherSlice.reducer;
