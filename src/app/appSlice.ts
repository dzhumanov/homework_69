import { createSlice } from "@reduxjs/toolkit";
import { fetchInfo, fetchShows } from "./appThunks";
import { ShowData, ShowInfo } from "../types";

interface appState {
  showArray: ShowData[] | null;
  isLoading: boolean;
  isError: boolean;
  info: ShowInfo | null;
}

const initialState: appState = {
  showArray: null,
  isLoading: false,
  isError: false,
  info: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      state.showArray = action.payload;
      state.isLoading = false;
      console.log(state.showArray);
    });
    builder.addCase(fetchShows.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchInfo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchInfo.fulfilled, (state, action) => {
      state.info = action.payload;
      state.isLoading = false;
      console.log(state.showArray);
    });
    builder.addCase(fetchInfo.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const appReducer = appSlice.reducer;
export const {} = appSlice.actions;
