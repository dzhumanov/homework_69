import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchShows } from "./appThunks";
import { ShowData } from "../types";

interface appState {
  showArray: ShowData[] | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: appState = {
  showArray: null,
  isLoading: false,
  isError: false,
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
  },
});

export const appReducer = appSlice.reducer;
export const {} = appSlice.actions;
