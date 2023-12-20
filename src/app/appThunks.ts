import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import { RootState } from "./store";
import { ShowData } from "../types";

export const fetchShows = createAsyncThunk<
  ShowData[],
  string,
  { state: RootState }
>("app/fetch", async (search, thunkAPI) => {
  try {
    const response = await axiosApi.get(`search/shows?q=${search}`);
    return response.data;
  } catch (error) {
    console.error("Error!", error);
    throw error;
  }
});
