import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { RootState } from "./store";
import { showProps } from "../types";

export const fetchShows = createAsyncThunk<
  Array<showProps>,
  undefined,
  { state: RootState }
>("app/fetch", async (_, thunkAPI) => {
  try {
    const currentValue = thunkAPI.getState().app.value;
    const response = await axiosApi.get(`${currentValue}`);
    return response.data;
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
});
