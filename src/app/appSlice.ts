import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchShows } from "./appThunks";
import { showProps } from "../types";

interface appState {
  value: string;
  showArray: Array<showProps> | null;
  isLoading: boolean;
  isError: boolean;
}

const initialState: appState = {
  value: "",
  showArray: null,
  isLoading: false,
  isError: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
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
export const { changeValue } = appSlice.actions;
